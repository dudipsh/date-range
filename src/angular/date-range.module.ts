// import { NgModule } from "@angular/core";
// import { registerElement } from "nativescript-angular/element-registry";
import {DIRECTIVES} from "./date-range.directive";

declare var NgModule;
declare var registerElement;
import {COMPONENTS} from "./date-range.component";
import {Common} from "../date-range.common";


@NgModule({
    declarations: [
        COMPONENTS,
        DIRECTIVES
    ],
    exports: [
        COMPONENTS,
        DIRECTIVES
    ],
})
export class DateRangeModule extends Common { }

registerElement("DateRange", () => require("../").DateRange);

