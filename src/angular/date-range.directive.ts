declare var Directive;
// import { Directive } from "@angular/core";

@Directive({
    selector: "dateRange"
})
export class DateRangeDirective  {
    public getSelectedValue() {
        return 'lalala';
    }
}


export const DIRECTIVES = [DateRangeDirective];
