import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/_model/user";
import { UserService } from "./../user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.css"]
})
export class IntroComponent implements OnInit {
  user: User = null;
  activeUser: User = null;
  isOpened = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
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
