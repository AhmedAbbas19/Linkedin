import { Injectable } from "@angular/core";
import { Industry } from "src/_model/industry";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class IndustryService {
  industries: Industry[];
  dataBaseURL = "https://linkedin-cc585.firebaseio.com/";
  constructor(private http: HttpClient) {
    this.industries = [];
    this.http
      .get(this.dataBaseURL + "industries.json")
      .pipe(
        map(response => {
          for (let key in response) {
            this.industries.push({ ...response[key] });
          }
        })
      )
      .subscribe();
  }

  getAll() {
    return this.industries;
  }
}
