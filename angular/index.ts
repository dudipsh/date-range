import {registerElement} from 'nativescript-angular/element-registry';
import {Component, OnInit, ViewChild, NgModule,  EventEmitter, Output, Input} from "@angular/core";
import {DateRange} from "../src";
registerElement("DateRange", () => require("../src").DateRange);

@Component({
    selector: "date-range-component",
    templateUrl: './date-range-component.html',
    styleUrls: ['./date-range-component.css'],
})
export class DateRangeComponent implements OnInit {
    // @ts-ignore
    @Input() titleText;
    @Input() buttonText;
    @ViewChild('elm', {static: true}) elm: DateRange;
    @Output() onSelectedDate: EventEmitter<any> = new EventEmitter<any>();
    private _androidViewId: number;
    nativeViewProtected: any;

    constructor() {

    }
    ngOnInit(): void {
    }

    selectedDate($event) {
        // @ts-ignore
        const dates = this.elm.nativeElement.getSelectedValue();
        this.onSelectedDate.emit(dates)
     }
}


@NgModule({
    declarations: [DateRangeComponent],
    exports: [
        DateRangeComponent
    ]
})

export class DateRangeModule {
}
