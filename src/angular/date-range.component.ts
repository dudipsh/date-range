//import { Component } from "@angular/core";
import {Common} from "../date-range.common";

// declare var Component;

// @ts-ignore
@Component({
    selector: "date-range-component",
    template: `
        <date-range prop1="value1"></date-range>
    `
})
export class DateRangeComponent  {
    constructor() {
        console.log('RUN!!');
    }
    public getSelectedValue() {
        return 'lalala';
    }
}

