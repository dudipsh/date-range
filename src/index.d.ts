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
    public getSelectedValue(): any;
    public showOnlyFutureDates(): any;
    public showLastYear(): any;
    public showLastYear(): any;
    initNativeView(): void;
    _emit(event);
}
