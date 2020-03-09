import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../features/user/user.service";
import { User } from "./../../../_model/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // To be Changed (Auth)
    this.user = this.userService.getById(0);
  }

  submitSearchVal(event) {
    if (event.key === "Enter") {
      this.router.navigate(["/search/", event.target.value]);
    }
    return;
  }
}
