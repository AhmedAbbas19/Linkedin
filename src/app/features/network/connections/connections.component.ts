import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "src/_model/user";
import { NetworkService } from "./../network.service";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

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
  currentUserId: string;
  private userSub: Subscription;
  peopleMayKnow: User[];
  netWorkSubscribtion: Subscription;
  constructor(
    private networkService: NetworkService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.userSub = this.authService.activeUser.subscribe(user => {
      this.currentUserId = user.id;
      // this.currentUserId = 0;
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
    });
  }
  acceptInvitation(id: string) {
    this.networkService.changeStatus(id, this.currentUserId, 1);
  }
  declineInvitation(id: string) {
    this.networkService.changeStatus(id, this.currentUserId, 2);
  }
  withdrawInvitation(id: string) {
    this.networkService.changeStatus(id, this.currentUserId, 4);
  }
  sendInvitation(id: string) {
    this.networkService.sendInvitation(this.currentUserId, id);
    const idx = this.peopleMayKnow.findIndex(u => u.id === id);
    this.peopleMayKnow.splice(idx, 1);
  }
  ngOnDestroy() {
    this.netWorkSubscribtion.unsubscribe();
    this.userSub.unsubscribe();
  }
}
