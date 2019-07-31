import { OnInit, EventEmitter } from "@angular/core";
import { DateRange } from "../";
export declare class DateRangeComponent implements OnInit {
    titleText: any;
    buttonText: any;
    elm: DateRange;
    onSelectedDate: EventEmitter<any>;
    private _androidViewId;
    nativeViewProtected: any;
    constructor();
    ngOnInit(): void;
    selectedDate($event: any): void;
}
export declare class DateRangeModule {
}

export * from './' 
