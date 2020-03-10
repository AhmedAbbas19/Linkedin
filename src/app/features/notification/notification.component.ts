import { Component, OnInit } from "@angular/core";
import { NotificationService } from "./service/notification.service";
import { Notification } from "./../../../_model/notification";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"]
})
export class NotificationComponent implements OnInit {
  notifications: Notification[];
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notifications = this.notificationService.getNotification();
  }
}
