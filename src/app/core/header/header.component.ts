import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../features/user/user.service";
import { User } from "./../../../_model/user";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { User as Us } from "src/app/auth/user.model";
import { Subscription } from "rxjs";

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
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.activeUser.subscribe(user => {
      console.log(!!user, window.location.pathname);
      this.isAuthenticated =
        !!user &&
        window.location.pathname !== "/start/profile-add" &&
        window.location.pathname !== "/auth/signup";
      if (user) {
        this.userService.getById(user.id).subscribe(user => {
          this.user = user;
        });
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
