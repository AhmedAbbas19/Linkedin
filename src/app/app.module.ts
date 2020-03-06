import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { UserProfileComponent } from "./features/user/user-profile/user-profile.component";
import { ConnectionsComponent } from './features/network/connections/connections.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserProfileComponent, ConnectionsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
