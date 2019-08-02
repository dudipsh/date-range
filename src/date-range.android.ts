import { Common } from './date-range.common';
import SimpleDateFormat = java.text.SimpleDateFormat;
import Locale = java.util.Locale;
import Integer = java.lang.Integer;

declare let com: any;
const CalendarPickerView = com.savvi.rangedatepicker.CalendarPickerView;

export class DateRange extends Common {
    private _androidViewId: number;
    nativeViewProtected: any;
    calendarView;

    constructor() {
        super();
    }

    public initCalendar() {
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
        this.calendarView.deactivateDates(list);
        this.calendarView.init(
            lastYear.getTime(),
            nextYear.getTime(),
            new SimpleDateFormat("MMMM, YYYY", Locale.getDefault()))
            .inMode(CalendarPickerView.SelectionMode.RANGE)
            .withHighlightedDates(arrayList)
            .withSelectedDate(today);
        this.calendarView.clearSelectedDates();
        return this.calendarView;
    }
    public createNativeView() {
        this.calendarView = new CalendarPickerView(this._context, null);
        return this.initCalendar();
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

    public showOnlyFutureDates() {
        let nextYear = java.util.Calendar.getInstance();
        let lastYear = java.util.Calendar.getInstance();
        lastYear.add(java.util.Calendar.YEAR, 0);
        lastYear.add(java.util.Calendar.MONTH, 0);
        lastYear.add(java.util.Calendar.DAY_OF_MONTH, 0);

        nextYear.add(java.util.Calendar.YEAR, 1);
        nextYear.add(java.util.Calendar.MONTH, 1);
        nextYear.add(java.util.Calendar.DAY_OF_MONTH, 1);

        this.calendarView.init(
            lastYear.getTime(),
            nextYear.getTime(),
            new SimpleDateFormat("MMMM, YYYY", Locale.getDefault()))
            .withSelectedDate(new java.util.Date())
            .inMode(CalendarPickerView.SelectionMode.RANGE);
        this.calendarView.clearSelectedDates();
    }

    showLastYear() {
        this.initCalendar();
    }

}
