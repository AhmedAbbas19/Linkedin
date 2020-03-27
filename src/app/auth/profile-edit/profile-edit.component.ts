import { Component, OnInit } from "@angular/core";
import { Country } from "src/_model/country";
import { Industry } from "src/_model/industry";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IndustryService } from "src/Services/industry/industry.service";
import { CountryService } from "src/Services/country/country.service";
import { User } from "src/_model/user";
import { UserService } from "src/app/features/user/user.service";
import { AuthService } from "../auth.service";
/**
 * @title Stepper overview
 */
@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.scss"]
})
export class ProfileEditComponent implements OnInit {
  user: User;
  userData = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    headline: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required)
  });
  contactInfo = new FormGroup({
    address: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required)
  });
  educationForm = new FormGroup({
    schoolOrCollege: new FormControl("", Validators.required),
    degree: new FormControl("", Validators.required),
    specialization: new FormControl("", Validators.required),
    startYear: new FormControl("", Validators.required),
    endYear: new FormControl("", Validators.required)
  });
  workInfoForm = new FormGroup({
    jobTitle: new FormControl("", Validators.required),
    company: new FormControl("", Validators.required),
    industry: new FormControl("", Validators.required)
  });
  countries: Country[];
  industries: Industry[];

  constructor(
    private CountryService: CountryService,
    private industryService: IndustryService,
    public userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.countries = this.CountryService.getAll();
    this.industries = this.industryService.getAll();
    this.authService.activeUser.subscribe(res => {
      this.user = this.userService.getById(res.id);
      console.log(res);
    });
    console.log(this.user, "here");
  }
  handleSubmit() {
    this.user.fname = this.userData.get("fname").value;
    this.user.lname = this.userData.get("lname").value;
    this.user.username = this.userData.get("username").value;
    this.user.headline = this.userData.get("headline").value;
    this.user.country.name = this.userData.get("country").value;
    this.user.address = this.contactInfo.get("address").value;
    this.user.phoneNumber = this.contactInfo.get("phone").value;
    this.user.birthDate = this.contactInfo.get("date").value;
    this.user.edu[0].title = this.educationForm.get("schoolOrCollege").value;
    this.user.edu[0].degree = this.educationForm.get("degree").value;
    this.user.edu[0].specialization = this.educationForm.get(
      "specialization"
    ).value;
    this.user.edu[0].startDate = this.educationForm.get("startYear").value;
    this.user.edu[0].endDate = this.educationForm.get("endYear").value;
    this.user.workExp[0].jobTitle = this.workInfoForm.get("jobTitle").value;
    this.user.workExp[0].workPlace = this.workInfoForm.get("company").value;
    this.user.industry.name = this.workInfoForm.get("industry").value;
  }
}
