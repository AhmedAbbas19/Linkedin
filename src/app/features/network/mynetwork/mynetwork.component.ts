import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "src/_model/user";
import { Subscription } from "rxjs";
import { NetworkService } from "../network.service";
import { UserService } from "../../user/user.service";

@Component({
  selector: "app-mynetwork",
  templateUrl: "./mynetwork.component.html",
  styleUrls: ["./mynetwork.component.scss"]
})
export class MynetworkComponent implements OnInit, OnDestroy {
  connected: User[];
  sentConnections: User[];
  RecivedConnections: User[];
  peopleMayKnow: User[];
  currentUserId: number = 0;
  netWorkSubscribtion: Subscription;
  constructor(
    private networkService: NetworkService,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.netWorkSubscribtion = this.networkService.connectionSubject.subscribe(
      value => {
        let { connected, sent, recived } = value;
        this.connected = connected;
        this.sentConnections = sent;
        this.RecivedConnections = recived;
      }
    );
    this.networkService.getById(this.currentUserId);
    this.peopleMayKnow = this.userService.getAll().filter(u => {
      let flag = true;
      if (
        this.connected.indexOf(u) !== -1 ||
        this.sentConnections.indexOf(u) !== -1 ||
        this.RecivedConnections.indexOf(u) !== -1 ||
        u.id === this.currentUserId
      ) {
        flag = false;
      }
      return flag;
    });
  }

  ngOnDestroy() {
    this.netWorkSubscribtion.unsubscribe();
  }
}
