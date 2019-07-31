import {View, Property, booleanConverter, CSSType, EventData, CssProperty} from "tns-core-modules/ui/core/view";
import {DateRange} from "./index";

const defaultDate = new Date();
const dateComparer = (x: Date, y: Date): boolean => (x <= y && x >= y);

@CSSType("DateRange")
export class Common extends View  {
    public static tapEvent = "tap";
    public static getSelectedDates;
}
