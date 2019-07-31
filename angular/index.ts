import {registerElement} from 'nativescript-angular/element-registry';
import {Component, OnInit, ViewChild, NgModule} from "@angular/core";
import {DateRange} from "../src";
import {View} from "tns-core-modules/ui/core/view";
registerElement("DateRange", () => require("../src").DateRange);

@Component({
    // tslint:disable-next-line:max-line-length directive-selector
    selector: "date-range-component",
    template: `
    <StackLayout class="page" height="100%" backgroundColor="#ccc">
    <StackLayout height="10%">
       <Button text="Test Btn"  (tap)="test($event)"></Button>
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
    private _androidViewId: number;
    nativeViewProtected: any;

    constructor() {

    }
    ngOnInit(): void {
    }
    test($event) {
        // @ts-ignore
        console.log(this.elm.nativeElement.getSelectedValue())
      //  console.log(this.elm)
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


// registerElement("DateRange", () => require("./index").DateRangeComponent)
