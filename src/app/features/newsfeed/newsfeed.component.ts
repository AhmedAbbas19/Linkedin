import { Component, OnInit } from "@angular/core";
import { Post } from "src/_model/post";
import { NewsfeedService } from "./newsfeed.service";
import { User } from "src/_model/user";
import { UserService } from "./../user/user.service";

@Component({
  selector: "app-newsfeed",
  templateUrl: "./newsfeed.component.html",
  styleUrls: ["./newsfeed.component.scss"]
})
export class NewsfeedComponent implements OnInit {
  posts: Post[];
  constructor(
    private newsfeedService: NewsfeedService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.posts = this.newsfeedService.getAll();
  }
}
