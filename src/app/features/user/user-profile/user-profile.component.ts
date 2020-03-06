import { Component, OnInit } from "@angular/core";

import { UserService } from "../user.service";
import { User } from "src/_model/user";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.users[0];
  }
}
