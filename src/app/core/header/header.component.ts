import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../features/user/user.service";
import { User } from "./../../../_model/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {}

  ngOnInit() {
    // To be Changed (Auth)
    this.user = this.userService.getById(0);
  }
}
