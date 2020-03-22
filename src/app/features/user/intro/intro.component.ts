import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/_model/user";
import { UserService } from "./../user.service";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.css"]
})
export class IntroComponent implements OnInit {
  @Input() currentUserId: number;
  currentUser: User;
  isOpened = false;

  constructor(private UserService: UserService) {}

  ngOnInit() {
    this.currentUser = this.UserService.getById(this.currentUserId);
  }
}
