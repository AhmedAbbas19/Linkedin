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
  latestNotif: Notification[] = [];
  oldNotif: Notification[] = [];
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
        this.notifications = JSON.parse(
          JSON.stringify(this.notificationService.getLoadedById(user.id))
        );
        for (const notif of this.notifications) {
          if (!notif.isRead) {
            notif.isRead = true;
            const notification = JSON.parse(JSON.stringify(notif));
            this.notificationService.save(notification).subscribe();
          }
          this.notificationService.fireNotifCount(0);
          const daysNum = Math.floor(
            (Date.now() - Date.parse(notif.date)) / (1000 * 60 * 60 * 24)
          );
          notif.date = daysNum ? daysNum + "d" : "Today";
          notif["actionUser"] = this.userService.getLoadedById(
            notif.actionUserId
          );
          if (daysNum < 3) {
            this.latestNotif.unshift(notif);
          } else {
            this.oldNotif.unshift(notif);
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.loadedDataSub.unsubscribe();
  }
}
