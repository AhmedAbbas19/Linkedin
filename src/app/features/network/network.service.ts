import { Injectable } from "@angular/core";
import { Connection } from "src/_model/connection";
import { User } from "src/_model/user";
import { UserService } from "./../user/user.service";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class NetworkService {
  connections: Connection[];
  connectionSubject: Subject<any>;
  connected: User[] = [];
  sent: User[] = [];
  recived: User[] = [];
  loaded = false;
  dataBaseURL = "https://linkedin-cc585.firebaseio.com/";
  constructor(private userService: UserService, private http: HttpClient) {
    this.connectionSubject = new Subject<any>();
    this.connections = [];
    this.http
      .get(this.dataBaseURL + "connections.json")
      .pipe(
        map(response => {
          for (let key in response) {
            this.connections.push({ ...response[key] });
          }
        })
      )
      .subscribe(res => {
        this.loaded = true;
      });
  }
  getById(id: string) {
    this.connected = [];
    this.sent = [];
    this.recived = [];
    for (const conn of this.connections) {
      if (id === conn.userOneId || id === conn.userTwoId) {
        let one = id === conn.userOneId ? id : conn.userTwoId;
        let two = id === conn.userOneId ? conn.userTwoId : conn.userOneId;
        if (conn.status === 1) {
          this.connected.push(this.userService.getById(two));
        } else if (conn.status === 0) {
          if (conn.actionUserId === one) {
            this.sent.push(this.userService.getById(two));
          } else {
            this.recived.push(this.userService.getById(two));
          }
        }
      }
    }
    this.fireConnectionsChanges();
  }
  changeStatus(oneId: string, twoId: string, newStatus: number) {
    for (const conn of this.connections) {
      if (
        (conn.userOneId === oneId && conn.userTwoId === twoId) ||
        (conn.userTwoId === oneId && conn.userOneId === twoId)
      ) {
        conn.status = newStatus;
        if (newStatus === 1) {
          //Accept
          this.connected.push(this.userService.getById(oneId));
          let idx = this.recived.indexOf(this.userService.getById(oneId));
          this.recived.splice(idx, 1);
        } else if (newStatus === 2) {
          //Decline
          let idx = this.recived.indexOf(this.userService.getById(oneId));
          this.recived.splice(idx, 1);
        } else if (newStatus === 4) {
          //Withdraw
          let idx = this.sent.indexOf(this.userService.getById(oneId));
          this.sent.splice(idx, 1);
          let connIdx = this.connections.indexOf(conn);
          this.connections.splice(connIdx, 1);
        }
        this.fireConnectionsChanges();
        break;
      }
    }
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
    this.sent.push(this.userService.getById(twoId));
    this.http
      .post(this.dataBaseURL + "connections.json", connection)
      .subscribe();
  }
  getMayKnow(id: string) {
    return this.userService.getAll().filter(u => {
      let flag = true;
      if (
        this.connected.indexOf(u) !== -1 ||
        this.sent.indexOf(u) !== -1 ||
        this.recived.indexOf(u) !== -1 ||
        u.id === id
      ) {
        flag = false;
      }
      return flag;
    });
  }
}
