import { Component, OnInit } from "@angular/core";
import { Country } from "src/_model/country";
import { Industry } from "src/_model/industry";
import { IndustryService } from 'src/Services/industry/industry.service';
import { CountryService } from 'src/Services/country/country.service';


@Component({
  selector: "app-intro-edit",
  templateUrl: "./intro-edit.component.html",
  styleUrls: ["./intro-edit.component.css"]
})
export class IntroEditComponent implements OnInit {
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
