import { Injectable } from "@angular/core";
import { Post } from "src/_model/post";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsfeedService {
  posts: Post[];
  dataBaseURL = "http://localhost:3000/posts";
  dataLoaded = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {
    this.http.get<Post[]>(this.dataBaseURL).subscribe(posts => {
      this.posts = posts;
      this.dataLoaded.next(true);
    });
  }
  getAll() {
    return this.posts;
  }
  getLoadedById(id: string): Post {
    return this.posts.find(p => p.id === id);
  }
  add(post: Post) {
    delete post.id;
    return this.http.post(this.dataBaseURL, post);
  }
  save(post: Post) {
    return this.http.put(this.dataBaseURL + "/" + post.id, post);
  }
}
