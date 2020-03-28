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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";

import { NotificationComponent } from "./features/notification/notification.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";

import { NewsfeedComponent } from "./features/newsfeed/newsfeed.component";
import { AuthService } from "src/app/auth/auth.service";

import { AuthComponent } from "./auth/auth.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./auth/auth.guard";
import { LandingPageComponent } from "./core/landing-page/landing-page.component";

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { AboutComponent } from "./features/user/about/about.component";
import { AboutEditComponent } from "./features/user/about-edit/about-edit.component";
import { ContactInfoComponent } from "./features/user/contact-info/contact-info.component";
import { IntroComponent } from "./features/user/intro/intro.component";
import { IntroEditComponent } from "./features/user/intro-edit/intro-edit.component";
import { AuthInterceptorService } from "./auth/auth.interceptor.service";
import { FooterComponent } from "./core/footer/footer.component";
import { ProfileAddComponent } from "./features/user/profile-add/profile-add.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    AboutComponent,
    AboutEditComponent,
    ContactInfoComponent,
    IntroComponent,
    IntroEditComponent,
    ConnectionsComponent,
    MynetworkComponent,
    SearchComponent,
    NotificationComponent,
    NewsfeedComponent,
    AuthComponent,
    NotFoundComponent,
    LandingPageComponent,
    FooterComponent,
    ProfileAddComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: "landing", component: LandingPageComponent },
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
      {
        path: "start/profile-add",
        component: ProfileAddComponent,
        canActivate: [AuthGuard]
      },
      { path: "auth", redirectTo: "auth/login", pathMatch: "full" },
      { path: "auth/:mode", component: AuthComponent },
      { path: "", redirectTo: "landing", pathMatch: "full" },
      { path: "not-found", component: NotFoundComponent },
      { path: "**", redirectTo: "not-found", pathMatch: "full" }
    ])
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
