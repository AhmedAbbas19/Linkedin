import { Injectable } from "@angular/core";
import { Notification } from "./../../../../_model/notification";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  notifCounter = new Subject<number>();
  notifications: Notification[] = [
    {
      id: "1",
      type: "like",
      actionUserId: "MQXaAnYtikNBRFagmubthx7jLo02",
      reciverId: "MQXaAnYtikNBRFagmubthx7jLo02",
      url: "/post/123",
      date: "1h",
      isRead: false
    },
    {
      id: "2",
      type: "comment",
      url: "/comment/123",
      actionUserId: "tc0lctpnf9RiUvZcNEDjOsvv2an1",
      reciverId: "MQXaAnYtikNBRFagmubthx7jLo02",
      date: "18h",
      isRead: false
    },
    {
      id: "3",
      type: "invite",
      url: "/post/123",
      actionUserId: "URuhUcGWOGgnP4Wp63pznNCHHH82",
      reciverId: "URuhUcGWOGgnP4Wp63pznNCHHH82",
      date: "1d",
      isRead: false
    },
    {
      id: "4",
      type: "decline",
      url: "/post/123",
      actionUserId: "Byt15qH3vFSlDiY0P31AJmlkJlz2",
      reciverId: "MQXaAnYtikNBRFagmubthx7jLo02",
      date: "2d",
      isRead: false
    },
    {
      id: "5",
      type: "react",
      url: "/profile/123",
      actionUserId: "Byt15qH3vFSlDiY0P31AJmlkJlz2",
      reciverId: "URuhUcGWOGgnP4Wp63pznNCHHH82",
      date: "1w",
      isRead: false
    }
  ];
  constructor() {}

  getAll() {
    return this.notifications;
  }

  pushNotification(notif: Notification) {
    this.notifications.unshift(notif);
  }
  setNotification(notification) {
    // for API
    this.notifications = notification;
  }
}
