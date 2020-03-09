import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { UserProfileComponent } from "./features/user/user-profile/user-profile.component";
import { ConnectionsComponent } from "./features/network/connections/connections.component";
import { PeopleMayKnowComponent } from "./features/network/people-may-know/people-may-know.component";
import { MynetworkComponent } from "./features/network/mynetwork/mynetwork.component";
import { NotificationComponent } from "./features/notification/notification.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    ConnectionsComponent,
    PeopleMayKnowComponent,
    MynetworkComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // { path: "mynetwork", component: ConnectionsComponent },
      { path: "mynetwork", component: MynetworkComponent },
      { path: "mynetwork/connections", component: ConnectionsComponent },
      { path: "profile/:username", component: UserProfileComponent },
      { path: "notification", component: NotificationComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
