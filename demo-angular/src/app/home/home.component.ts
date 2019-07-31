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

        // Init your component properties here.

    }
      public test($event) {
         console.log($event);
      //    console.log(4)
      }
}

