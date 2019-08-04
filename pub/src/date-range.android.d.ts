import { Common } from './date-range.common';
export declare class DateRange extends Common {
    private _androidViewId;
    nativeViewProtected: any;
    calendarView: any;
    constructor();
    initCalendar(): any;
    createNativeView(): any;
    initNativeView(): void;
    getSelectedValue(): any;
    showOnlyFutureDates(): void;
    showLastYear(): void;
}
