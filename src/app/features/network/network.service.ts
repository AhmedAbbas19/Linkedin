import { Injectable } from "@angular/core";
import { Connection } from "src/_model/connection";
import { User } from "src/_model/user";
import { UserService } from "./../user/user.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NetworkService {
  connections: Connection[];
  connectionSubject: Subject<any>;
  connected: User[] = [];
  sent: User[] = [];
  recived: User[] = [];
  constructor(private userService: UserService) {
    this.connectionSubject = new Subject<any>();
    this.connections = [
      {
        userOneId: 0,
        userTwoId: 1,
        status: 1,
        actionUserId: 1
      },
      {
        userOneId: 0,
        userTwoId: 2,
        status: 1,
        actionUserId: 1
      },
      {
        userOneId: 0,
        userTwoId: 3,
        status: 1,
        actionUserId: 3
      },
      {
        userOneId: 0,
        userTwoId: 4,
        status: 0,
        actionUserId: 4
      },
      {
        userOneId: 0,
        userTwoId: 5,
        status: 0,
        actionUserId: 0
      }
    ];
  }
  getById(id: number) {
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
  changeStatus(oneId: number, twoId: number, newStatus: number) {
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
}
