import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {View} from "tns-core-modules/ui/core/view";
import {DateRangeComponent} from "../../../../src/angular/index";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild('dr', {static: true}) dr: DateRangeComponent;
    selectedDates ;
    constructor() {
    }

    ngOnInit(): void {
    }

    public onSelectedDate($event) {
        this.selectedDates = $event;
        alert(this.selectedDates)
    }
    getValue() {
        console.log(this.dr.getSelectedValue())
    }
    showOnlyFutureDates() {
        this.dr.showOnlyFutureDates();
    }

    showLastYear() {
        this.dr.showLastYear();
    }

}

