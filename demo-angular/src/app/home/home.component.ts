import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {View} from "tns-core-modules/ui/core/view";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild('dr', {static: false}) dr: any;
    selectedDates ;
    constructor() {
    }

    ngOnInit(): void {
    }

    public onSelectedDate($event) {
        console.log($event);
        this.selectedDates = $event;
        alert(this.selectedDates)
    }

    showOnlyFutureDates() {
        this.dr.showOnlyFutureDates();
    }

    showLastYear() {
        this.dr.showLastYear();
    }

}

