import { Common } from './date-range.common';
// import {DateRangeModule} from './angular';
// export * from './angular';
export declare class DateRange extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
    private _androidViewId;
    nativeViewProtected: any;
    calendarView: any;
    createNativeView(): any;
    public static getSelectedValue(): any;
    public static showOnlyFutureDates(): any;
    public static showLastYear(): any;
    public static initCalendar(): void;
    _emit(event);
}
