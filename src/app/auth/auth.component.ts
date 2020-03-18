import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors
} from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  loginMode: boolean = true;
  authForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
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
    const { email } = this.authForm.value;
    const { password } = this.authForm.value;
    this.authForm.reset();
    if (this.loginMode) {
      this.authService.login(email, password).subscribe(
        response => {
          // console.log(response);
        },
        ({ error }) => {
          console.log(error);
        }
      );
    } else {
      this.authService.signUp(email, password).subscribe(
        response => {
          // console.log(response);
        },
        ({ error }) => {
          console.log(error);
        }
      );
    }
  }
}
