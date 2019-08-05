# Nativescript ui date range

Date Range plugin for angular support only for Android!

![nativesceipt date range](https://raw.githubusercontent.com/dudipsh/date-range/master/images/dateRange.PNG)

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
<date-range-component>
</date-range-component>
```

## API
```typescript
@ViewChild('dr', {static: false}) dr: any;

this.dr.showOnlyFutureDates(): void
this.dr.showLastYear(): void
this.dr.selectedDate(): => {startDate, endDate}

```



## License


Apache License Version 2.0, January 2004
