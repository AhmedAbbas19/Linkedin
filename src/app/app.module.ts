import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { UserProfileComponent } from "./features/user/user-profile/user-profile.component";
import { ConnectionsComponent } from "./features/network/connections/connections.component";
import { PeopleMayKnowComponent } from "./features/network/people-may-know/people-may-know.component";
import { MynetworkComponent } from "./features/network/mynetwork/mynetwork.component";
import { SearchComponent } from "./features/search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NotificationComponent } from "./features/notification/notification.component";

import { NewsfeedComponent } from "./features/newsfeed/newsfeed.component";
import { LoginComponent } from "./features/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    ConnectionsComponent,
    PeopleMayKnowComponent,
    MynetworkComponent,
    SearchComponent,
    NotificationComponent,
    NewsfeedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: NewsfeedComponent },
      { path: "mynetwork", component: MynetworkComponent },
      { path: "mynetwork/connections", component: ConnectionsComponent },
      { path: "profile/:username", component: UserProfileComponent },
      { path: "search/:searchVal", component: SearchComponent },
      { path: "notification", component: NotificationComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
