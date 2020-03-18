import { Injectable } from "@angular/core";
import { Notification } from "./../../../../_model/notification";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  notifications: Notification[] = [
    {
      id: 1,
      type: "like",
      text:
        "like : This is a wider card with supporting text below as a natural",
      image: "https://picsum.photos/200?v=" + Math.random(),
      url: "/post/123",
      created: "1h"
    },
    {
      id: 2,
      type: "comment",
      text:
        "comment : This is a wider card with supporting text below as a natural",
      image: "https://picsum.photos/200?v=" + Math.random(),
      url: "/comment/123",
      created: "18h"
    },
    {
      id: 3,
      type: "share",
      text:
        "share : This is a wider card with supporting text below as a natural",
      image: "https://picsum.photos/200?v=" + Math.random(),
      url: "/post/123",
      created: "1d"
    },
    {
      id: 4,
      type: "update_status",
      text:
        "update : This is a wider card with supporting text below as a natural",
      image: "https://picsum.photos/200?v=" + Math.random(),
      url: "/post/123",
      created: "2d"
    },
    {
      id: 5,
      type: "view_profile",
      text:
        "profile : This is a wider card with supporting text below as a natural",
      image: "https://picsum.photos/200?v=" + Math.random(),
      url: "/profile/123",
      created: "15/6/2016 1:30pm"
    }
  ];
  constructor() {}

  getAll() {
    return this.notifications;
  }

  setNotification(notification) {
    // for API
    this.notifications = notification;
  }
}
