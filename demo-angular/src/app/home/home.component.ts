import {Component, OnInit, ViewChild} from "@angular/core";
import {DateRange} from 'nativescript-date-range';
import {registerElement} from "nativescript-angular";
// registerElement("DateRange", () => require("nativescript-date-range").DateRange);

  @Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild('elm', {static: false}) elm;
    dateRange;
    constructor() {
        this.dateRange = new DateRange();
      // new  DateRange();
    // new DateRange();
        // new DateRangeComponent()
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {

        // Init your component properties here.

    }
      public test($event) {
       // console.log(this.dateRange);
      //    console.log(4)
      }
}

