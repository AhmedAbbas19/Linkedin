import { Injectable } from "@angular/core";
import { Notification } from "./../../../../_model/notification";
import { Subject, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  notifications: Notification[];
  dataLoaded = new BehaviorSubject<boolean>(false);
  databaseUrl = "http://localhost:3000/notifications";
  notifCount = new Subject<number>();
  constructor(private http: HttpClient) {
    this.http.get<Notification[]>(this.databaseUrl).subscribe(notifications => {
      this.notifications = notifications;
      this.dataLoaded.next(true);
    });
  }

  getAll() {
    return this.notifications;
  }
  getById(id: number) {
    return this.http.get(this.databaseUrl + "/" + id);
  }
  getLoadedById(id: string) {
    return this.notifications.filter(n => n.reciverId === id);
  }
  add(notif: Notification) {
    return this.http.post(this.databaseUrl, notif);
  }
  save(notif: Notification) {
    return this.http.put(this.databaseUrl + "/" + notif.id, notif);
  }
  delete(notif: Notification) {
    return this.http.delete(this.databaseUrl + "/" + notif.id);
  }
  fireNotifCount(count: number) {
    this.notifCount.next(count);
  }
  setNotification(notification) {
    // for API
    this.notifications = notification;
  }
}
