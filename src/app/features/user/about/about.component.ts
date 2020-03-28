import { Component, OnInit } from "@angular/core";
import { User } from "src/_model/user";
import { UserService } from "../user.service";
import { AuthService } from "src/app/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  user: User = null;
  activeUser: User = null;
  constructor(
    public userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.activeUser.subscribe(res => {
      this.userService.getById(res.id).subscribe(user => {
        this.activeUser = user;
      });
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
