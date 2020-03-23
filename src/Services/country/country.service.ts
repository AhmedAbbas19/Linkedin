import { Injectable } from "@angular/core";
import { Country } from "src/_model/country";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  countries: Country[];
  dataBaseURL = "https://linkedin-cc585.firebaseio.com/";
  constructor(private http: HttpClient) {
    this.countries = [];
    this.http
      .get(this.dataBaseURL + "countries.json")
      .pipe(
        map(response => {
          for (let key in response) {
            this.countries.push({ ...response[key] });
          }
        })
      )
      .subscribe();
  }

  getAll() {
    return this.countries;
  }
}
