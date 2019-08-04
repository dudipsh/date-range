import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class DateRangeComponent implements OnInit {
    dateRange: ElementRef;
    titleText: any;
    buttonText: any;
    onSelectedDate: EventEmitter<any>;
    private _androidViewId;
    nativeViewProtected: any;
    constructor();
    ngOnInit(): void;
    selectedDate($event: any): void;
    getSelectedValue(): any;
    showOnlyFutureDates(): void;
    showLastYear(): void;
}
export declare class DateRangeModule {
}
