import {registerElement} from 'nativescript-angular/element-registry';
import {Component, OnInit, ViewChild, NgModule, EventEmitter, Output, Input} from '@angular/core';
import {DateRange} from "../";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptCommonModule} from "nativescript-angular/common";

registerElement("DateRange", () => require("..").DateRange);

@Component({
    selector: "date-range-component",
    template: `
        <StackLayout class="date-range-calendar-container">
            <StackLayout height="50" width="100%">
                <StackLayout>
                    <Label class="text-title text-center" [text]="titleText"></Label>
                </StackLayout>
            </StackLayout>
            <StackLayout>
                <StackLayout height="100%" width="100%">
                    <AbsoluteLayout height="85%" width="100%">
                        <StackLayout height="100%" width="100%">
                            <DateRange #elm></DateRange>
                        </StackLayout>
                    </AbsoluteLayout>
                    <AbsoluteLayout height="15%" width="100%">
                        <StackLayout width="100%" height="90%">
                            <StackLayout height="100%" width="90%" top="8%">
                                <Button color="white" class="oval" backgroundColor="#f49e4b" [text]="buttonText"
                                        (tap)="selectedDate($event)"></Button>
                            </StackLayout>
                        </StackLayout>
                    </AbsoluteLayout>
                </StackLayout>
            </StackLayout>
        </StackLayout>
    `,
    styles: [
            `.date-range-calendar-container {
        }

        .date-range-calendar-container .oval {
            margin: 22px;
            border-width: 1px;
            border-radius: 50%;
            z-index: 0;
        }

        .date-range-calendar-container .text-title {
            color: #959dad;
            text-align: center;
            margin-top: 20%;
        }
        `
    ]
})
export class DateRangeComponent implements OnInit {
    // @ts-ignore
    @Input() titleText;
    @Input() buttonText;
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
        if (dates) {
            const toArr = dates.split(',');
            if (toArr.length > 2) {
                const startDate = toArr[0].replace('[', '');
                const endDate = toArr[toArr.length - 1].replace(']', '');
                this.onSelectedDate.emit({startDate, endDate});
            }
        }
    }
}


@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
    ],
    declarations: [
        DateRangeComponent
    ],
    exports: [
        DateRangeComponent
    ]
})

export class DateRangeModule {
}
