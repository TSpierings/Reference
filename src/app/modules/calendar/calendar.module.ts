import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularCalendarComponent } from './components/circular-calendar/circular-calendar.component';



@NgModule({
  declarations: [CircularCalendarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CircularCalendarComponent
  ]
})
export class CalendarModule { }
