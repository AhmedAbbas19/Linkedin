import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "src/_model/user";
import { NetworkService } from "./../network.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-connections",
  templateUrl: "./connections.component.html",
  styleUrls: ["./connections.component.scss"]
})
export class ConnectionsComponent implements OnInit, OnDestroy {
  connected: User[];
  sentConnections: User[];
  RecivedConnections: User[];
  activeStatus: number = 1;
  currentUserId: number = 0;
  netWorkSubscribtion: Subscription;
  constructor(private networkService: NetworkService) {}
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
    // console.log(this.connected);
  }
  acceptInvitation(id: number) {
    this.networkService.changeStatus(id, this.currentUserId, 1);
  }
  declineInvitation(id: number) {
    this.networkService.changeStatus(id, this.currentUserId, 2);
  }
  withdrawInvitation(id: number) {
    this.networkService.changeStatus(id, this.currentUserId, 4);
  }
  ngOnDestroy() {
    this.netWorkSubscribtion.unsubscribe();
  }
}
