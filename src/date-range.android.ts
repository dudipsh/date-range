import { Common } from './date-range.common';
import SimpleDateFormat = java.text.SimpleDateFormat;
import Locale = java.util.Locale;
import ArrayList = java.util.ArrayList;
import Integer = java.lang.Integer;

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
        let lastYear = java.util.Calendar.getInstance();
        lastYear.add(java.util.Calendar.YEAR, -1);
        lastYear.add(java.util.Calendar.MONTH, -10);
        lastYear.add(java.util.Calendar.DAY_OF_MONTH, -1);

        nextYear.add(java.util.Calendar.YEAR, 2);
        nextYear.add(java.util.Calendar.MONTH, 2);
        nextYear.add(java.util.Calendar.DAY_OF_MONTH, 2);

        // @ts-ignore
        const list: java.util.ArrayList<Integer> = new java.util.ArrayList<>();
        const today = new java.util.Date();

        // @ts-ignore
        const arrayList: java.util.ArrayList<java.util.Date>  = new java.util.ArrayList<>();

        const CalendarPickerView = com.savvi.rangedatepicker.CalendarPickerView;
        this.calendarView = new CalendarPickerView(this._context, null);
        this.calendarView.deactivateDates(list);
        this.calendarView.init(
            lastYear.getTime(),
            nextYear.getTime(),
            new SimpleDateFormat("MMMM, YYYY", Locale.getDefault()))
            .inMode(CalendarPickerView.SelectionMode.RANGE)
            .withHighlightedDates(arrayList)
            .withSelectedDate(today);
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
