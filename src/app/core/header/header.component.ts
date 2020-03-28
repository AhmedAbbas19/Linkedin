import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../features/user/user.service";
import { User } from "./../../../_model/user";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { User as Us } from "src/app/auth/user.model";
import { Subscription, combineLatest } from "rxjs";
import { NotificationService } from "./../../features/notification/service/notification.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  user: User;
  isAuthenticated = false;
  private userSub: Subscription;
  notifCount = 0;
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    const loadedData = combineLatest([
      this.authService.activeUser,
      this.userService.dataLoaded,
      this.notificationService.dataLoaded
    ]);
    loadedData.subscribe(dataLoaded => {
      let [user, usersLoaded, notifsLoaded] = dataLoaded;
      this.isAuthenticated =
        !!user &&
        window.location.pathname !== "/start/profile-add" &&
        window.location.pathname !== "/auth/signup";
      if (user && usersLoaded) {
        this.user = this.userService.getLoadedById(user.id);
        if (notifsLoaded) {
          this.notifCount = this.notificationService
            .getLoadedById(user.id)
            .filter(n => !n.isRead).length;
          this.notificationService.notifCount.subscribe(count => {
            this.notifCount = count;
          });
        }
      }
    });
  }

  submitSearchVal(event) {
    if (event.key === "Enter") {
      this.router.navigate(["/search/", event.target.value]);
    }
    return;
  }
  onLogout() {
    this.authService.logout();
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
