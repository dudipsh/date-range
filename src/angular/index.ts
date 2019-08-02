import {registerElement} from 'nativescript-angular/element-registry';
import {Component, OnInit, ViewChild, NgModule, EventEmitter, Output, Input} from "@angular/core";
import {DateRange} from "../";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptCommonModule} from "nativescript-angular/common";

registerElement("DateRange", () => require("../").DateRange);

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
        if (dates.toString()) {
            const toArr = dates.toString().split(',');
            if (toArr.length >= 2) {
                const startDate = toArr[0].replace('[', '');
                const endDate = toArr[toArr.length - 1].replace(']', '');
                this.onSelectedDate.emit({startDate, endDate});
            } else {
                this.onSelectedDate.emit({startDate: dates.toString()});
            }
        }
    }

    public showOnlyFutureDates() {
        this.elm.nativeElement.showOnlyFutureDates();
    }

    showLastYear() {
        this.elm.nativeElement.initCalendar();
    }


}


@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
    ],
    declarations: [DateRangeComponent],
    exports: [
        DateRangeComponent
    ]
})

export class DateRangeModule {
}
