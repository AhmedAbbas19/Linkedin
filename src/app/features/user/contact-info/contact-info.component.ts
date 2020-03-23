import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/_model/user";

@Component({
  selector: "app-contact-info",
  templateUrl: "./contact-info.component.html",
  styleUrls: ["./contact-info.component.css"]
})
export class ContactInfoComponent implements OnInit {
  @Input() user: User;
  href = window.location.href;
  constructor() {}

  ngOnInit() {}
}
