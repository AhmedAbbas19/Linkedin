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
        this.notifications = this.notificationService.getAll();
        this.latestNotif = this.notifications
          .filter(n => {
            const daysNum =
              (Date.now() - Date.parse(n.date)) / (1000 * 60 * 60 * 24);
            if (n.reciverId === user.id && daysNum < 3) {
              return true;
            }
          })
          .map(n => {
            const daysNum = Math.floor(
              (Date.now() - Date.parse(n.date)) / (1000 * 60 * 60 * 24)
            );
            return {
              ...n,
              date: daysNum ? daysNum + "d" : "Today",
              actionUser: this.userService.getLoadedById(n.actionUserId)
            };
          })
          .reverse();
        this.oldNotif = this.notifications
          .filter(n => {
            const daysNum =
              (Date.now() - Date.parse(n.date)) / (1000 * 60 * 60 * 24);
            if (n.reciverId === user.id && daysNum > 2) {
              return true;
            }
          })
          .map(n => {
            const daysNum = Math.floor(
              (Date.now() - Date.parse(n.date)) / (1000 * 60 * 60 * 24)
            );
            return {
              ...n,
              date: daysNum ? daysNum + "d" : "Today",
              actionUser: this.userService.getLoadedById(n.actionUserId)
            };
          })
          .reverse();
      }
    });
  }

  ngOnDestroy() {
    this.loadedDataSub.unsubscribe();
  }
}
