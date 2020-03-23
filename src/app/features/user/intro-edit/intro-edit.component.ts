import { Component, OnInit } from "@angular/core";
import { Country } from "src/_model/country";
import { Industry } from "src/_model/industry";
import { IndustryService } from "src/Services/industry/industry.service";
import { CountryService } from "src/Services/country/country.service";
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/_model/user";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-intro-edit",
  templateUrl: "./intro-edit.component.html",
  styleUrls: ["./intro-edit.component.css"]
})
export class IntroEditComponent implements OnInit {
  countries: Country[];
  industries: Industry[];
  introForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    headline: new FormControl(),
    country: new FormControl(),
    industry: new FormControl()
  });
  user: User;
  constructor(
    private CountryService: CountryService,
    private industryService: IndustryService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.countries = this.CountryService.getAll();
    this.industries = this.industryService.getAll();
    this.route.params.subscribe(res => {
      this.user = this.userService.getByUsername(res.username);
      if (!this.user) {
        this.router.navigate(["not-found"]);
      }
    });

    this.introForm.setValue({
      fname: this.user.fname,
      lname: this.user.lname,
      headline: this.user.headline,
      country: this.user.country.name,
      industry: this.user.industry.name
    });
  }

  onSubmit() {
    let u = this.introForm.getRawValue();
    this.user.fname = u.fname;
    this.user.lname = u.lname;
    this.user.headline = u.headline;
    this.user.country.name = u.country;
    this.user.industry.name = u.industry;
    this.userService.save(this.user);
    console.log(this.user);
  }
}
