// import { NgModule } from "@angular/core";
// import { registerElement } from "nativescript-angular/element-registry";

import { DateRangeComponent} from "./date-range.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        DateRangeComponent,
     ],
    exports: [
        DateRangeComponent,
     ],
})
export class DateRangeModule  { }

// @ts-ignore
registerElement("DateRange", () => require("../").DateRange);

