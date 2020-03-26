import { Component, OnInit } from "@angular/core";
import { NotificationService } from "./service/notification.service";
import { Notification } from "./../../../_model/notification";
import { UserService } from "./../user/user.service";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "src/_model/user";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"]
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  userSub: Subscription;
  user: User;
  constructor(
    private notificationService: NotificationService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.activeUser.subscribe(user => {
      if (user) {
        this.userService.getById(user.id).subscribe(user => {
          this.user = user;
          this.notifications = this.notificationService
            .getAll()
            .filter(n => n.reciverId === user.id)
            .reverse();
          this.userService.dataLoaded.subscribe(res => {
            if (res) {
              for (const notif of this.notifications) {
                notif["actionUser"] = this.userService.getLoadedById(
                  notif.actionUserId
                );
              }
            }
          });
        });
      }
    });
  }
}
