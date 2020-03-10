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
  peopleMayKnow: User[];
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
    this.peopleMayKnow = this.networkService.getMayKnow(this.currentUserId);
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
  sendInvitation(id: number) {
    this.networkService.sendInvitation(this.currentUserId, id);
    const idx = this.peopleMayKnow.findIndex(u => u.id === id);
    this.peopleMayKnow.splice(idx, 1);
  }
  ngOnDestroy() {
    this.netWorkSubscribtion.unsubscribe();
  }
}
