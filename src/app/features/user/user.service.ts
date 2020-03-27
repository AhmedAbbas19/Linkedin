import { Injectable } from "@angular/core";
import { User } from "src/_model/user";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  dataBaseURL = "http://localhost:3000/users/";
  dataLoaded = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {
    this.users = [];
    this.http.get<User[]>(this.dataBaseURL).subscribe(users => {
      this.users = users;
      this.dataLoaded.next(true);
    });
  }
  getAll(): User[] {
    return this.users;
  }
  getById(id: string) {
    return this.http.get<User>(this.dataBaseURL + id);
  }
  getLoadedById(id: string) {
    return this.users.find(u => u.id === id);
  }
  getByUsername(username: string): User {
    return this.users.find(u => u.username === username);
  }
  add(user: User) {
    // user.id = (this.users.length + 1).toString();
    // this.users.push(user);
    this.http.post(this.dataBaseURL, user).subscribe(response => {
      user["id"] = response["id"];
      this.users.unshift(user);
    });
  }

  save(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
  }

  delete(id: string) {
    const index = this.users.findIndex(u => u.id === id);
    this.users.splice(index, 1);
  }
  // getAll() {
  //   return this.http.get(this.url).pipe(catchError(this.handleError));
  // }

  // getById(id: number) {
  //   return this.http.get(this.url + "/" + id);
  // }

  // addUser(user) {
  //   return this.http.post(this.url, user);
  // }

  // updateUser(user) {
  //   return this.http.put(this.url + "/" + user.id, user);
  // }

  // deleteUser(id) {
  //   return this.http
  //     .delete(this.url + "/" + id)
  //     .pipe(catchError(this.handleError));
  // }

  // handleError(error: Response) {
  //   if (error.status === 404) {
  //     return throwError(new NotFoundError());
  //   } else if (error.status === 400) {
  //     return throwError(new BadRequestError());
  //   } else {
  //     return throwError(new AppError(error));
  //   }
  // }
}
