import { Component, OnInit } from "@angular/core";

import { UserService } from "../user.service";
import { User } from "src/_model/user";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  user: User;
  userSub: Subscription;
  activeUser: User;
  constructor(
    public userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.activeUser.subscribe(user => {
      if (user) {
        this.userService.getById(user.id).subscribe(user => {
          this.activeUser = user;
        });
      }
    });
    this.route.params.subscribe(param => {
      this.userService.dataLoaded.subscribe(res => {
        if (res) {
          this.user = this.userService.getByUsername(param.username);
          if (!this.user) {
            this.router.navigate(["not-found"]);
          }
        }
      });
    });
  }
}
