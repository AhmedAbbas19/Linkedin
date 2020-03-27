import { Component, OnInit } from "@angular/core";
import { UserService } from "./../user/user.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/_model/user";
import { combineLatest } from "rxjs";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  users: User[];
  searchVal = "";
  result: User[];
  isLoading = true;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const loadedData = combineLatest([
      this.route.params,
      this.userService.dataLoaded
    ]);

    loadedData.subscribe(dataLoaded => {
      let [params, usersLoaded] = dataLoaded;
      if (params && usersLoaded) {
        this.isLoading = false;
        this.searchVal = params["searchVal"];
        this.users = this.userService.getAll();
        this.search(this.searchVal);
      }
    });
  }

  search(val: string) {
    this.result = [];
    this.users.map(user => {
      if (
        user.fname.toLowerCase().includes(val) ||
        user.lname.toLowerCase().includes(val)
      ) {
        this.result.push(user);
      }
    });
  }
}
