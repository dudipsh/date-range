import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import {DateRangeModule} from "../../../../src/angular";
// import {DateRangeComponent, DateRangeModule} from "../../../../angular/index";


// import {DateRange, DateRangeModule} from "../../../../src";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        DateRangeModule
    ],
    declarations: [
        HomeComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
