import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);
  activeUser = this.user.asObservable();
  tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: Date;
    } = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTzETYU58ZMzF7zeR6VvircClXsXrpxRo",
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        tap(resp => {
          this.fireAuthentication(resp);
        })
      );
  }
  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTzETYU58ZMzF7zeR6VvircClXsXrpxRo",
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        tap(resp => {
          this.fireAuthentication(resp);
        })
      );
  }
  logout() {
    localStorage.removeItem("userData");
    this.user.next(null);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.router.navigate(["/auth"]);
  }
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
  fireAuthentication(resp: AuthResponse) {
    const expirationDate = new Date(
      new Date().getTime() + +resp.expiresIn * 1000
    );
    const user = new User(
      resp.email,
      // resp.localId,
      "0",
      resp.idToken,
      expirationDate
    );
    this.user.next(user);
    this.autoLogout(+resp.expiresIn * 1000);
    localStorage.setItem("userData", JSON.stringify(user));
    this.router.navigate(["/home"]);
  }
}
