import { Component, OnInit, OnDestroy } from "@angular/core";
import { NotificationService } from "./service/notification.service";
import { Notification } from "./../../../_model/notification";
import { UserService } from "./../user/user.service";
import { Subscription, combineLatest } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "src/_model/user";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"]
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  loadedDataSub: Subscription;
  user: User;
  isLoading = true;
  constructor(
    private notificationService: NotificationService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const loadedData = combineLatest([
      this.authService.activeUser,
      this.userService.dataLoaded,
      this.notificationService.dataLoaded
    ]);

    this.loadedDataSub = loadedData.subscribe(dataLoaded => {
      let [user, usersLoaded, notifLoaded] = dataLoaded;
      if (user && usersLoaded && notifLoaded) {
        this.isLoading = false;
        this.user = this.userService.getLoadedById(user.id);
        this.notifications = this.notificationService
          .getAll()
          .filter(n => n.reciverId === user.id)
          .reverse();
        for (const notif of this.notifications) {
          notif["actionUser"] = this.userService.getLoadedById(
            notif.actionUserId
          );
        }
      }
    });
  }

  ngOnDestroy() {
    this.loadedDataSub.unsubscribe();
  }
}
