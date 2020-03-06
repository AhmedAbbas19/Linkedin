import { Component, OnInit } from "@angular/core";
import { User } from "src/_model/user";
import { NetworkService } from "./../network.service";

@Component({
  selector: "app-connections",
  templateUrl: "./connections.component.html",
  styleUrls: ["./connections.component.scss"]
})
export class ConnectionsComponent implements OnInit {
  connected: User[];
  sentConnections: User[];
  RecivedConnections: User[];
  activeStatus: number = 1;
  currentUserId: number = 0;
  constructor(private networkService: NetworkService) {}
  ngOnInit() {
    this.networkService.connectionSubject.subscribe(value => {
      let { connected, sent, recived } = value;
      this.connected = connected;
      this.sentConnections = sent;
      this.RecivedConnections = recived;
    });
    this.networkService.getById(this.currentUserId);
    console.log(this.connected);
  }
  acceptInvitation(id: number) {
    this.networkService.changeStatus(id, this.currentUserId, 1);
  }
  declineInvitation(id) {}
}
