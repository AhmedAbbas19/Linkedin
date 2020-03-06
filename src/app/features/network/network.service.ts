import { Injectable } from "@angular/core";
import { Connection } from "src/_model/connection";

@Injectable({
  providedIn: "root"
})
export class NetworkService {
  connections: Connection[];
  constructor() {
    this.connections = [
      {
        userOneId: 1,
        userTwoId: 2,
        status: 0,
        actionUserId: 1
      },
      {
        userOneId: 1,
        userTwoId: 3,
        status: 0,
        actionUserId: 1
      },
      {
        userOneId: 2,
        userTwoId: 3,
        status: 1,
        actionUserId: 2
      },
      {
        userOneId: 2,
        userTwoId: 4,
        status: 0,
        actionUserId: 4
      },
      {
        userOneId: 3,
        userTwoId: 4,
        status: 0,
        actionUserId: 3
      }
    ];
  }
  getAll() {}
  getById() {}
}
