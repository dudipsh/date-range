import { Common } from './date-range.common';
import Toast = android.widget.Toast;
import Long = java.lang.Long;
let clickListener: android.view.View.OnClickListener;
declare let com: any;

export class DateRange extends Common {
    private _androidViewId: number;
    nativeViewProtected: any;
    calendarView;
    static tapEvent: string;

    public createNativeView() {
        let nextYear = java.util.Calendar.getInstance();
        nextYear.add(java.util.Calendar.YEAR, 1);
        const today = new java.util.Date();
        const CalendarPickerView = com.savvi.rangedatepicker.CalendarPickerView;
        this.calendarView = new CalendarPickerView(this._context, null);
        this.calendarView.init(today, nextYear.getTime())
            .inMode(CalendarPickerView.SelectionMode.RANGE)
            .withSelectedDate(new java.util.Date());
        this.calendarView.OnClickListener = new android.view.View.OnClickListener({
            onClick(param0: android.view.View): void {

            }
        })

        return this.calendarView;
        //   return '';
    }


    public initNativeView(): void {
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
    }

    public getSelectedValue() {
        return this.calendarView.getSelectedDates();
    }
}



function initializeClickListener(): void {
    // Define ClickListener class only once.
    if (clickListener) {
        return;
    }

    // Interfaces decorator with implemented interfaces on this class
    @Interfaces([android.view.View.OnClickListener])
    class ClickListener extends java.lang.Object implements android.view.View.OnClickListener {
        public owner: DateRange;

        constructor() {
            super();
            // Required by Android runtime when native class is extended through TypeScript.
            return global.__native(this);
        }

        public onClick(v: android.view.View): void {
            // When native button is clicked we raise 'tap' event.
            const owner = (<any>v).owner;
            if (owner) {
                owner.notify({ eventName: DateRange.tapEvent, object: owner });
            }
        }
    }

    clickListener = new ClickListener();
}
