import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  registerNavigate() {
    this.router.navigate(["auth/signup"]);
  }

  loginNavigate() {
    this.router.navigate(["auth/login"]);
  }
}
