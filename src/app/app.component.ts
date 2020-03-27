import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { NetworkService } from "./features/network/network.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "linkedin";
  constructor(
    private authService: AuthService,
    private networkService: NetworkService
  ) {}
  ngOnInit() {
    this.authService.autoLogin();
  }
}
