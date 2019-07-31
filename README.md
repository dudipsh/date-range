# Your Plugin Name
#### Nativescript Date Range
Date Range plugin for angular support only for Android!

![alt text](https://github.com/dudipsh/date-range/blob/master/images/dateRange.PNG)

## Installation

```javascript
npm i nativescript-ui-date-range --save
```

## Usage 

#### app.module
```typescript
import {DateRangeComponent, DateRangeModule} from "nativescript-date-range/angular";
 imports: [
       ....
        DateRangeModule
    ]
```

#### home.component.html
```html
<date-range-component
        [titleText]="'Please select leave and return dates'"
        [buttonText]="'Save'"
        (onSelectedDate)="onSelectedDate($event)">
</date-range-component>
```

## License

Apache License Version 2.0, January 2004
