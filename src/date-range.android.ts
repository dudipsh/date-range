import { Common } from './date-range.common';

declare let com: any;

export class DateRange extends Common {
    private _androidViewId: number;
    nativeViewProtected: any;
    calendarView;


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
        //   return '';
    }

    public initNativeView(): void {
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
    }
}



