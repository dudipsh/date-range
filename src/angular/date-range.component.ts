//import { Component } from "@angular/core";
import {Common} from "../date-range.common";

declare var Component;
@Component({
    selector: "date-range-component",
    template: `
        <date-range prop1="value1"></date-range>
    `
})
export class DateRangeComponent extends Common  {
    constructor() {
        super();
        console.log('RUN!!')
    }
}


export const COMPONENTS = [DateRangeComponent];
