import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../features/user/user.service";
import { User } from "./../../../_model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { User as Us } from "src/app/auth/user.model";
import { Subscription, combineLatest } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  user: User;
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userSub = this.authService.activeUser.subscribe(user => {
      this.isAuthenticated =
        !!user && window.location.pathname !== "/start/profile-edit";
      console.log(!!user, window.location.pathname);
      if (user) {
        this.user = this.userService.getById(user.id);
    const loadedData = combineLatest([
      this.authService.activeUser,
      this.userService.dataLoaded
    ]);
    loadedData.subscribe(dataLoaded => {
      let [user, usersLoaded] = dataLoaded;
      if (user && usersLoaded) {
        this.isAuthenticated = !!user;
        this.user = this.userService.getLoadedById(user.id);
      }
    });
    console.log(this.userSub);
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
