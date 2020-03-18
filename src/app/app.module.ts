import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { UserProfileComponent } from "./features/user/user-profile/user-profile.component";
import { ConnectionsComponent } from "./features/network/connections/connections.component";
import { MynetworkComponent } from "./features/network/mynetwork/mynetwork.component";
import { SearchComponent } from "./features/search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NotificationComponent } from "./features/notification/notification.component";

import { NewsfeedComponent } from "./features/newsfeed/newsfeed.component";
import { AuthService } from "src/app/auth/auth.service";

import { AuthComponent } from "./auth/auth.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    ConnectionsComponent,
    MynetworkComponent,
    SearchComponent,
    NotificationComponent,
    NewsfeedComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: NewsfeedComponent, canActivate: [AuthGuard] },
      {
        path: "mynetwork",
        component: MynetworkComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "mynetwork/connections",
        component: ConnectionsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "profile/:username",
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "search/:searchVal",
        component: SearchComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "notification",
        component: NotificationComponent,
        canActivate: [AuthGuard]
      },
      { path: "auth", component: AuthComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
