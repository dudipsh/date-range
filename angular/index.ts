import {registerElement} from 'nativescript-angular/element-registry';
import {Component, OnInit, ViewChild, NgModule,  EventEmitter, Output} from "@angular/core";
import {DateRange} from "../src";
registerElement("DateRange", () => require("../src").DateRange);

@Component({
    // tslint:disable-next-line:max-line-length directive-selector
    selector: "date-range-component",
    template: `
    <StackLayout class="page" height="100%" backgroundColor="#ccc">
    <StackLayout height="10%">
       <Button text="Test Btn" (tap)="selectedDate($event)"></Button>
    </StackLayout>
     <StackLayout> 
       <DateRange  #elm> </DateRange> 
     </StackLayout>
    </StackLayout>
    `,

})
export class DateRangeComponent implements OnInit {
    // @ts-ignore
    @ViewChild('elm', {static: true}) elm: DateRange;
    @Output() onSelectedDate: EventEmitter<any> = new EventEmitter<any>();
    private _androidViewId: number;
    nativeViewProtected: any;

    constructor() {

    }
    ngOnInit(): void {
    }

    selectedDate($event) {
        // @ts-ignore
        const dates = this.elm.nativeElement.getSelectedValue();
        this.onSelectedDate.emit(dates)
     }
}


@NgModule({
    declarations: [DateRangeComponent],
    exports: [
        DateRangeComponent
    ]
})

export class DateRangeModule {
}
