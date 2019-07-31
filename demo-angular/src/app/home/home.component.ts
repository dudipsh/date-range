import {Component, OnInit, ViewChild} from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    public onSelectedDate($event) {
        console.log($event);
    }
}

