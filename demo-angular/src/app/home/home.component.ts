import { Component, OnInit } from "@angular/core";
import {DateRange} from 'nativescript-date-range';
import {registerElement} from "nativescript-angular";
registerElement("DateRange", () => require("nativescript-date-range").DateRange);

  @Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
       new  DateRange();
    // new DateRange();
        // new DateRangeComponent()
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}

