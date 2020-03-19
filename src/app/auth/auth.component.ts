import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors
} from "@angular/forms";
import { AuthService } from "./auth.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  loginMode: boolean = true;
  isLoading = false;
  authForm: FormGroup;
  userSub: Subscription;
  authFormErrors = {};
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(res => {
      if (res.mode === "login") {
        this.loginMode = true;
      } else if (res.mode === "signup") {
        this.loginMode = false;
      } else {
        this.router.navigate(["**"]);
      }
    });

    this.userSub = this.authService.activeUser.subscribe(user => {
      if (user) {
        this.router.navigate(["/home"]);
      }
    });
    this.authForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  submitHandler() {
    if (this.authForm.invalid) {
      return;
    }
    this.isLoading = true;
    const { email } = this.authForm.value;
    const { password } = this.authForm.value;
    if (this.loginMode) {
      this.authService.login(email, password).subscribe(
        response => {
          this.isLoading = false;
          console.log(response);
        },
        ({ error }) => {
          this.isLoading = false;
          this.errorHandling(error.error.message);
        }
      );
    } else {
      this.authService.signUp(email, password).subscribe(
        response => {
          this.isLoading = false;
          console.log(response);
        },
        ({ error }) => {
          this.isLoading = false;
          this.errorHandling(error.error.message);
        }
      );
    }
  }
  switchMode() {
    this.loginMode = !this.loginMode;
    if (this.loginMode) {
      this.router.navigate(["auth/login"]);
    } else {
      this.router.navigate(["auth/signup"]);
    }
  }
  errorHandling(message: string) {
    this.authFormErrors = {};
    switch (message) {
      case "EMAIL_NOT_FOUND":
        this.authFormErrors["email"] =
          "This email is not found or may have been deleted.";
        break;
      case "INVALID_PASSWORD":
        this.authFormErrors["password"] = "This password is invalid.";
        break;
      case "USER_DISABLED":
        this.authFormErrors["email"] =
          "The user account has been disabled by an administrator.";
        break;
      case "EMAIL_EXISTS":
        this.authFormErrors["email"] =
          "This email is already exists, Try to login.";
        break;
      default:
        this.authFormErrors["email"] =
          "You can't complete this process now, Try again later.";
        break;
    }
    console.log(this.authFormErrors);
  }
}
