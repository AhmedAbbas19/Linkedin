import { Component, OnInit } from "@angular/core";
import { Country } from "src/_model/country";
import { Industry } from "src/_model/industry";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl
} from "@angular/forms";
import { IndustryService } from "src/Services/industry/industry.service";
import { CountryService } from "src/Services/country/country.service";
import { User } from "src/_model/user";
import { UserService } from "src/app/features/user/user.service";
import { AuthService } from "src/app/auth/auth.service";

/**
 * @title Stepper overview
 */

@Component({
  selector: "app-profile-add",
  templateUrl: "./profile-add.component.html",
  styleUrls: ["./profile-add.component.scss"]
})
export class ProfileAddComponent implements OnInit {
  user: User = { country: {}, industry: {}, edu: [{}], workExp: [{}] };
  imagePath: any;
  userData = new FormGroup({
    fname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*")
    ]),
    lname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*")
    ]),
    username: new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[A-Za-z][A-Za-z'-]+")
      ],
      this.shouldBeUniqueWrapper(this.userService)
    ),
    headline: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    country: new FormControl("", Validators.required),
    imagUrl: new FormControl("", [Validators.required])
  });
  contactInfo = new FormGroup({
    address: new FormControl("", Validators.required),
    phone: new FormControl("", [Validators.required, Validators.minLength(11)]),
    date: new FormControl("", [Validators.required, Validators.min(1900)])
  });
  educationForm = new FormGroup({
    schoolOrCollege: new FormControl("", Validators.required),
    degree: new FormControl("", Validators.required),
    specialization: new FormControl("", Validators.required),
    startYear: new FormControl("", [
      Validators.required,
      Validators.min(1961),
      Validators.max(2200)
    ]),
    endYear: new FormControl("", [
      Validators.required,
      Validators.min(1967),
      Validators.max(2226)
    ])
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
    this.authService.activeUser.subscribe(user => {
      console.log(user.email, user.id, this.user);
      this.user.email = user.email;
      this.user.id = user.id;
    });
  }
  shouldBeUniqueWrapper(userService: UserService) {
    return (username: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve, reject) => {
        let result = this.userService
          .getAll()
          .findIndex(user => user.username === username.value);
        if (result !== -1) {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      });
    };
  }

  loadingfile(event) {
    var fileData = <File>event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = _event => {
      this.imagePath = reader.result;
    };
    console.log(this.imagePath);
  }

  handleSubmit() {
    if (this.workInfoForm.valid) {
      this.user.fname = this.userData.get("fname").value;
      this.user.lname = this.userData.get("lname").value;
      this.user.username = this.userData.get("username").value;
      this.user.headline = this.userData.get("headline").value;
      this.user.imagUrl = this.imagePath;
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
      console.log(this.user);
      this.userService.add(this.user);
      setTimeout(() => {
        window.location.pathname = "/home";
      }, 3000);
    }
  }
}
