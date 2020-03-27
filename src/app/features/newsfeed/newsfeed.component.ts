import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "src/_model/post";
import { NewsfeedService } from "./newsfeed.service";
import { User } from "src/_model/user";
import { UserService } from "./../user/user.service";
import { Subscription, Observable, forkJoin, combineLatest } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NotificationService } from "./../notification/service/notification.service";
import { Notification } from "./../../../_model/notification";
import { take } from "rxjs/operators";

@Component({
  selector: "app-newsfeed",
  templateUrl: "./newsfeed.component.html",
  styleUrls: ["./newsfeed.component.scss"]
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  arabic = /[\u0600-\u06FF]/;
  commentForm = new FormGroup({
    comment: new FormControl()
  });
  isCommentsShowen: boolean = false;
  postIndex: number;
  imagePath: any;
  postForm = new FormGroup({
    "post-content": new FormControl("", [Validators.required]),
    "post-image": new FormControl("", Validators.required)
  });
  posts: Post[];
  activeUser: User;
  currentUserId: string;
  private dataLoadedSub: Subscription;
  constructor(
    private newsfeedService: NewsfeedService,
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    const dataLoaded = combineLatest([
      this.authService.activeUser,
      this.userService.dataLoaded,
      this.newsfeedService.dataLoaded
    ]);

    this.dataLoadedSub = dataLoaded.subscribe(loadedData => {
      let [user, usersLoaded, newsfeedLoaded] = loadedData;
      if (user && usersLoaded && newsfeedLoaded) {
        this.currentUserId = user.id;
        this.activeUser = this.userService.getLoadedById(user.id);

        this.posts = JSON.parse(JSON.stringify(this.newsfeedService.getAll()));

        for (const post of this.posts) {
          post["isOpend"] = false;
          post["isLiked"] = post.likedIds.includes(this.currentUserId);
          for (const comment of post.comments) {
            comment["author"] = this.userService.getLoadedById(
              comment.authorId
            );
          }
          post["author"] = this.userService.getLoadedById(post.authorId);
        }
      }
    });
  }
  ngOnDestroy() {
    this.dataLoadedSub.unsubscribe();
  }

  handleLike(post: Post) {
    post["isLiked"] = !post["isLiked"];
    let newPost = this.newsfeedService.getLoadedById(post.id);
    if (post["isLiked"]) {
      post.likedIds.unshift(this.currentUserId);
      newPost.likedIds.unshift(this.currentUserId);
      //Notification
      const currentDate = new Date().toLocaleDateString("en-US");
      const notif: Notification = {
        actionUserId: this.currentUserId,
        reciverId: post.authorId,
        type: "like",
        url: "/post/" + post.id,
        date: currentDate,
        isRead: false
      };
      this.notificationService.add(notif).subscribe();
    } else {
      const idx = post.likedIds.indexOf(this.currentUserId);
      post.likedIds.splice(idx, 1);
      newPost.likedIds.splice(idx, 1);
    }
    this.newsfeedService.save(newPost).subscribe();
  }

  onCommenting(i: number) {
    this.postIndex = i;
    this.posts[i]["isOpend"] = true;
    this.isCommentsShowen = true;
  }

  handleAddingComment(event, post: Post) {
    if (event.target.value) {
      let newPost = this.newsfeedService.getLoadedById(post.id);
      let newComment = {
        authorId: this.currentUserId,
        comment: event.target.value
      };
      newPost.comments.unshift(newComment);
      this.newsfeedService.save(newPost).subscribe();

      newComment["author"] = this.userService.getLoadedById(this.currentUserId);
      post.comments.unshift(newComment);

      //Notification
      const currentDate = new Date().toLocaleDateString("en-US");
      const notif: Notification = {
        actionUserId: this.currentUserId,
        reciverId: post.authorId,
        type: "comment",
        url: "/post/" + post.id,
        date: currentDate,
        isRead: false
      };
      this.notificationService.add(notif).subscribe();

      event.target.blur();
      this.commentForm.reset();
    }
  }

  loadingfile(event) {
    var fileData = <File>event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = _event => {
      this.imagePath = reader.result;
    };
  }
  handleSubmittingPost() {
    if (this.postForm.valid) {
      this.userService.dataLoaded.subscribe(res => {
        if (res) {
          const currentDate = new Date().toLocaleDateString("en-US");
          var newPost = {
            authorId: this.currentUserId,
            date: currentDate,
            content: this.postForm.get("post-content").value,
            imagUrl: this.imagePath,
            author: this.userService.getLoadedById(this.currentUserId),
            likedIds: [],
            isLiked: false,
            comments: []
          };
          this.imagePath = null;
          this.posts.unshift(newPost);
          this.postForm.get("post-content").setValue("");
          this.newsfeedService.add(newPost).subscribe();
        }
      });
    }
  }
}
