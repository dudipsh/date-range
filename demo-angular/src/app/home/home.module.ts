import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
 import {DateRangeModule} from "../../../../src/angular";
import {DateRangeComponent} from "../../../../src/angular/date-range.component";

// import {DateRange, DateRangeModule} from "../../../../src";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,

    ],
    declarations: [
        HomeComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
