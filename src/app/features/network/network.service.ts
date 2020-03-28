import { Injectable } from "@angular/core";
import { Connection } from "src/_model/connection";
import { User } from "src/_model/user";
import { UserService } from "./../user/user.service";
import { Subject, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Notification } from "./../../../_model/notification";
import { NotificationService } from "./../notification/service/notification.service";

@Injectable({
  providedIn: "root"
})
export class NetworkService {
  connections: Connection[];
  connectionSubject: Subject<any>;
  connected: User[] = [];
  sent: User[] = [];
  recived: User[] = [];
  dataBaseURL = "http://localhost:3000/connections";
  dataLoaded = new BehaviorSubject<boolean>(false);
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    this.connectionSubject = new Subject<any>();
    this.connections = [];
    this.getConnections().subscribe(connections => {
      this.connections = connections;
      this.dataLoaded.next(true);
    });
  }
  getConnections() {
    return this.http.get<Connection[]>(this.dataBaseURL);
  }
  getById(id: string) {
    this.sent = [];
    this.recived = [];
    this.connected = [];
    this.userService.dataLoaded.subscribe(res => {
      if (res) {
        for (const conn of this.connections) {
          if (id === conn.userOneId || id === conn.userTwoId) {
            let one = id === conn.userOneId ? id : conn.userTwoId;
            let two = id === conn.userOneId ? conn.userTwoId : conn.userOneId;
            if (conn.status === 1) {
              this.connected.push(this.userService.getLoadedById(two));
            } else if (conn.status === 0) {
              if (conn.actionUserId === one) {
                this.sent.push(this.userService.getLoadedById(two));
              } else {
                this.recived.push(this.userService.getLoadedById(two));
              }
            }
          }
        }
        this.fireConnectionsChanges();
      }
    });
  }
  changeStatus(oneId: string, twoId: string, newStatus: number) {
    //notification
    const currentDate = new Date().toLocaleDateString("en-US");
    let notif: Notification = {
      actionUserId: twoId,
      reciverId: oneId,
      url: "/mynetwork",
      date: currentDate,
      isRead: false
    };
    this.userService.dataLoaded.subscribe(res => {
      if (res) {
        for (const conn of this.connections) {
          if (
            (conn.userOneId === oneId && conn.userTwoId === twoId) ||
            (conn.userTwoId === oneId && conn.userOneId === twoId)
          ) {
            conn.status = newStatus;
            if (newStatus === 1) {
              //Accept
              this.connected.push(this.userService.getLoadedById(oneId));
              let idx = this.recived.indexOf(
                this.userService.getLoadedById(oneId)
              );
              this.recived.splice(idx, 1);
              const connection = { ...conn };
              this.http
                .put(this.dataBaseURL + "/" + connection.id, connection)
                .subscribe();
              notif.type = "accept";
            } else if (newStatus === 2) {
              //Decline
              let idx = this.recived.indexOf(
                this.userService.getLoadedById(oneId)
              );
              this.recived.splice(idx, 1);
              const connection = { ...conn };
              this.http
                .put(this.dataBaseURL + "/" + connection.id, connection)
                .subscribe();
              notif.type = "decline";
            } else if (newStatus === 4) {
              //Withdraw
              let idx = this.sent.indexOf(
                this.userService.getLoadedById(oneId)
              );
              this.sent.splice(idx, 1);
              let connIdx = this.connections.indexOf(conn);
              this.connections.splice(connIdx, 1);
              const connection = { ...conn };
              this.http
                .delete(this.dataBaseURL + "/" + connection.id)
                .subscribe();
            }
            this.notificationService.add(notif).subscribe();
            this.fireConnectionsChanges();
            break;
          }
        }
      }
    });
  }
  fireConnectionsChanges() {
    this.connectionSubject.next({
      connected: this.connected,
      sent: this.sent,
      recived: this.recived
    });
  }
  sendInvitation(oneId: string, twoId: string) {
    const connection = {
      userOneId: oneId,
      userTwoId: twoId,
      status: 0,
      actionUserId: oneId
    };
    this.connections.push(connection);
    this.userService.getById(twoId).subscribe(user => {
      this.sent.push(user);
    });
    this.http.post(this.dataBaseURL, connection).subscribe();
    //notification
    const currentDate = new Date().toLocaleDateString("en-US");
    const notif: Notification = {
      actionUserId: oneId,
      reciverId: twoId,
      type: "invite",
      url: "/mynetwork",
      date: currentDate,
      isRead: false
    };
    this.notificationService.add(notif).subscribe();
  }
  getMayKnow(id: string) {
    return this.userService.getAll().filter(u => {
      let flag = true;
      if (
        this.connected.find(user => user.id === u.id) ||
        this.sent.find(user => user.id === u.id) ||
        this.recived.find(user => user.id === u.id) ||
        u.id === id
      ) {
        flag = false;
      }
      return flag;
    });
  }
}
