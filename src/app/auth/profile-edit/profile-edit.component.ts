import { Component, OnInit } from "@angular/core";
import { Country } from "src/_model/country";
import { Industry } from "src/_model/industry";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IndustryService } from "src/Services/industry/industry.service";
import { CountryService } from "src/Services/country/country.service";
/**
 * @title Stepper overview
 */
@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.scss"]
})
export class ProfileEditComponent implements OnInit {
  userData = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required)
  });
  contactInfo = new FormGroup({
    address: new FormControl(),
    phone: new FormControl(),
    birthDate: new FormControl()
  });
  countries: Country[];
  industries: Industry[];

  constructor(
    private CountryService: CountryService,
    private industryService: IndustryService
  ) {}

  ngOnInit() {
    this.countries = this.CountryService.getAll();
    this.industries = this.industryService.getAll();
  }
}
