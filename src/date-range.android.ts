import { Common } from './date-range.common';

declare let com: any;
declare let registerElement: any;

export class DateRange extends Common {
    private _androidViewId: number;
    nativeViewProtected: any;
    calendarView;

    constructor() {
        super();
    }

    public createNativeView() {
        let nextYear = java.util.Calendar.getInstance();
        nextYear.add(java.util.Calendar.YEAR, 1);
        const today = new java.util.Date();
        const CalendarPickerView = com.savvi.rangedatepicker.CalendarPickerView;
        this.calendarView = new CalendarPickerView(this._context, null);
        this.calendarView.init(today, nextYear.getTime())
            .inMode(CalendarPickerView.SelectionMode.RANGE)
            .withSelectedDate(new java.util.Date());
        return this.calendarView;
    }
    public initNativeView(): void {
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        const nativeView = this.nativeViewProtected;
        this.nativeView.setId(nativeView);
    }

    public getSelectedValue() {
        return this.calendarView.getSelectedDates();
    }

}
