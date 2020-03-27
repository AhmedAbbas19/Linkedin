import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "src/_model/post";
import { NewsfeedService } from "./newsfeed.service";
import { User } from "src/_model/user";
import { UserService } from "./../user/user.service";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-newsfeed",
  templateUrl: "./newsfeed.component.html",
  styleUrls: ["./newsfeed.component.scss"]
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  commentForm = new FormGroup({
    comment: new FormControl()
  });
  isCommentsShowen: boolean;
  postIndex: number;
  imagePath: any;
  postForm = new FormGroup({
    "post-content": new FormControl("", [
      Validators.required
      // Validators.minLength(5)
    ]),
    "post-image": new FormControl()
  });
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
    this.isCommentsShowen = false;
    this.userSub = this.authService.activeUser.subscribe(user => {
      this.currentUserId = user.id;
      this.userService.getById(this.currentUserId).subscribe(user => {
        this.activeUser = user;
      });
      this.posts = this.newsfeedService.getAll(); // Delete this
      for (const post of this.posts) {
        this.userService.getById(post.authorId).subscribe(user => {
          post["author"] = user;
        });
      }
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  handleLike(post) {
    this.posts[this.posts.indexOf(post)].isLiked = !this.posts[
      this.posts.indexOf(post)
    ].isLiked;
    if (this.posts[this.posts.indexOf(post)].isLiked) {
      this.posts[this.posts.indexOf(post)].likesNumber.unshift(
        this.currentUserId
      );
    } else {
      this.posts[this.posts.indexOf(post)].likesNumber.shift();
    }
  }

  onCommenting(i) {
    this.postIndex = i;
    this.isCommentsShowen = true;
  }

  handleAddingComment(event, post) {
    this.posts[this.posts.indexOf(post)].comments.unshift(event.target.value);
    event.target.value = "";
    event.target.blur();
  }

  loadingfile(event) {
    var fileData = <File>event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = _event => {
      this.imagePath = reader.result;
    };
  }
  handleSubmittingPost(event) {
    if (this.postForm.valid) {
      this.userService.dataLoaded.subscribe(res => {
        if (res) {
          console.log(this.postForm.get("post-content").value);
          var newPost = {
            authorId: this.currentUserId,
            date: "11/05/2005",
            content: this.postForm.get("post-content").value,
            imagUrl: this.imagePath,
            author: this.userService.getLoadedById(this.currentUserId),
            likesNumber: [],
            isLiked: false,
            comments: []
          };
          this.posts.unshift(newPost);
          this.postForm.get("post-content").setValue("");
        }
      });
    }
  }
}
