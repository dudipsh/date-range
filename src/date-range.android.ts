import { Common } from './date-range.common';
import Toast = android.widget.Toast;
import CalendarView = android.widget.CalendarView;
import {dateProperty, dayProperty, monthProperty, yearProperty} from "tns-core-modules/ui/date-picker";
import {Button} from "tns-core-modules/ui/button";
import {PseudoClassHandler} from "tns-core-modules/ui/core/view";
import {GestureTypes, TouchAction, TouchGestureEventData} from "tns-core-modules/ui/gestures";

declare let com: any;
declare let registerElement: any;

interface DateChangeListener {
    new(owner: CalendarView): android.widget.CalendarView.OnDateChangeListener;
}

let DateChangeListener: DateChangeListener;


function initializeClickListener(): void {
    if (DateChangeListener) {
        return;
    }

    @Interfaces([android.widget.CalendarView.OnDateChangeListener])
    class ClickListenerImpl extends java.lang.Object implements android.widget.CalendarView.OnDateChangeListener{
        public onSelectedDayChange(param0: CalendarView, param1: number, param2: number, param3: number): void {
            const toaset = Toast.makeText(null, "TEST123", Toast.LENGTH_LONG)
            toaset.show();
        }
        constructor(public owner: CalendarView) {
            super();
            return global.__native(this);
        }
        public onClick(v: android.view.View): void {
            const owner = this.owner;
            const toaset = Toast.makeText(null, "TEST123", Toast.LENGTH_LONG)
            toaset.show();
            if (owner) {

                // @ts-ignore
             //   owner._emit(ButtonBase.tapEvent);
            }
        }
    }

    DateChangeListener = ClickListenerImpl;
}


export class DateRange extends Common {
    private _highlightedHandler: (args: TouchGestureEventData) => void;

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
        // this.calendarView.getSelectedDates = new android.view.View.OnClickListener({
        //     onClick(param0: android.view.View): void {
        //         const toaset = Toast.makeText(this._context, "aaaasdasdasda", Toast.LENGTH_LONG)
        //         toaset.show();
        //     }
        // });
        // this.calendarView.setOnDateSelectedListener = new android.view.View.OnClickListener({
        //     onClick(param0: android.view.View): void {
        //         const toaset = Toast.makeText(this._context, "aaaasdasdasda", Toast.LENGTH_LONG)
        //         toaset.show();
        //     }
        // });
        return this.calendarView;
        //   return '';
    }
    public initNativeView(): void {
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        const nativeView = this.nativeViewProtected;
        initializeClickListener();
        const clickListener = new DateChangeListener(this.calendarView.getSelectedDates());
        nativeView.setOnClickListener(clickListener);
        (<any>nativeView).OnDateChangeListener = clickListener;

        this.nativeView.setId(nativeView);
    }

    public getSelectedValue() {
        return this.calendarView.getSelectedDates();
    }

    @PseudoClassHandler("normal", "highlighted", "pressed", "active")
    _updateButtonStateChangeHandler(subscribe: boolean) {

        if (subscribe) {
            this._highlightedHandler = this._highlightedHandler || ((args: TouchGestureEventData) => {
                switch (args.action) {
                    case TouchAction.up:
                    case TouchAction.cancel:
                        this._goToVisualState("normal");
                        break;
                    case TouchAction.down:
                        this._goToVisualState("highlighted");
                        break;
                }
            });
            this.on(GestureTypes.touch, this._highlightedHandler);
        } else {
            this.off(GestureTypes.touch, this._highlightedHandler);
        }
    }
}
