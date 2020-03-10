import { Injectable } from "@angular/core";
import { Post } from "src/_model/post";

@Injectable({
  providedIn: "root"
})
export class NewsfeedService {
  posts: Post[];
  constructor() {
    this.posts = [
      {
        id: 0,
        date: "3/10/2020",
        authorId: 0,
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/last-phot17.jpg"
      },
      {
        id: 1,
        date: "2/10/2020",
        authorId: 0,
        content: "Hello there I'm creating Linkedin"
      },
      {
        id: 2,
        date: "3/10/2020",
        authorId: 1,
        content: "Goooooooood Morning Vietnaaam!",
        imagUrl: "assets/last-phot17.jpg"
      },
      {
        id: 3,
        date: "3/10/2020",
        authorId: 2,
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/last-phot17.jpg"
      },
      {
        id: 4,
        date: "3/10/2020",
        authorId: 3,
        content: "Hello there I'm creating Linkedin"
      },
      {
        id: 5,
        date: "3/10/2020",
        authorId: 2,
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/last-phot17.jpg"
      },
      {
        id: 6,
        date: "3/10/2020",
        authorId: 5,
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/last-phot17.jpg"
      },
      {
        id: 7,
        date: "3/10/2020",
        authorId: 8,
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/last-phot17.jpg"
      }
    ];
  }
  getAll() {
    return this.posts;
  }
  getById(id: number) {
    return this.posts.find(p => p.id === id);
  }
  getByAuthorId(AuthId: number) {
    return this.posts.find(p => p.id === AuthId);
  }
}
