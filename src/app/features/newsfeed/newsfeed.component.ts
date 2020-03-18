import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "src/_model/post";
import { NewsfeedService } from "./newsfeed.service";
import { User } from "src/_model/user";
import { UserService } from "./../user/user.service";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-newsfeed",
  templateUrl: "./newsfeed.component.html",
  styleUrls: ["./newsfeed.component.scss"]
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  posts: Post[];
  activeUser: User;
  currentUserId;
  private userSub: Subscription;
  constructor(
    private newsfeedService: NewsfeedService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.activeUser.subscribe(user => {
      this.currentUserId = user.id;
      this.activeUser = this.userService.getById(this.currentUserId);
      this.posts = this.newsfeedService.getAll(); // Delete this
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
