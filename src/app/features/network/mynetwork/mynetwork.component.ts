import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "src/_model/user";
import { Subscription } from "rxjs";
import { NetworkService } from "../network.service";
import { UserService } from "../../user/user.service";
import { AuthService } from "src/app/auth/auth.service";

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
  currentUserId: string;
  private userSub: Subscription;
  netWorkSubscribtion: Subscription;
  constructor(
    private networkService: NetworkService,
    private userService: UserService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.userSub = this.authService.activeUser.subscribe(user => {
      if (user) {
        this.currentUserId = user.id;
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
    });
  }

  sendInvitation(id: string) {
    this.networkService.sendInvitation(this.currentUserId, id);
    const idx = this.peopleMayKnow.findIndex(u => u.id === id);
    this.peopleMayKnow.splice(idx, 1);
  }

  acceptInvitation(id: string) {
    this.networkService.changeStatus(id, this.currentUserId, 1);
  }
  declineInvitation(id: string) {
    this.networkService.changeStatus(id, this.currentUserId, 2);
  }
  getRandomNumber() {
    return Math.ceil(Math.random() * 254);
  }
  ngOnDestroy() {
    this.netWorkSubscribtion.unsubscribe();
    this.userSub.unsubscribe();
  }
}
