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
        id: "2",
        date: "3/10/2020",
        authorId: "tc0lctpnf9RiUvZcNEDjOsvv2an1",
        content: "Goooooooood Morning Vietnaaam!",
        imagUrl: "assets/photo-item1.jpg"
      },
      {
        id: "3",
        date: "3/10/2020",
        authorId: "MQXaAnYtikNBRFagmubthx7jLo02",
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/photo-item3.jpg"
      },
      {
        id: "0",
        date: "3/10/2020",
        authorId: "tc0lctpnf9RiUvZcNEDjOsvv2an1",
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/shop-product3.png"
      },
      {
        id: "1",
        date: "2/10/2020",
        authorId: "tc0lctpnf9RiUvZcNEDjOsvv2an1",
        content: "Hello there I'm creating Linkedin"
      },
      {
        id: "4",
        date: "3/10/2020",
        authorId: "MQXaAnYtikNBRFagmubthx7jLo02",
        content: "Hello there I'm creating Linkedin"
      },
      {
        id: "5",
        date: "3/10/2020",
        authorId: "943A6viR4YbKYlhZnSZsThidqEx1",
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/photo-item5.jpg"
      },
      {
        id: "6",
        date: "3/10/2020",
        authorId: "URuhUcGWOGgnP4Wp63pznNCHHH82",
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/shop-product3.png"
      },
      {
        id: "7",
        date: "3/10/2020",
        authorId: "943A6viR4YbKYlhZnSZsThidqEx1",
        content: "Hello there I'm creating Linkedin",
        imagUrl: "assets/photo-item1.jpg"
      }
    ];
  }
  getAll() {
    return this.posts;
  }
}
