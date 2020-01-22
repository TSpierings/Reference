import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { isUndefined } from 'util';

@Component({
  selector: 'app-circular-calendar',
  templateUrl: './circular-calendar.component.html',
  styleUrls: ['./circular-calendar.component.scss']
})
export class CircularCalendarComponent implements OnInit {

  public months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  private selectedMonth: number;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public getTransform(i: number): SafeStyle {
    const offset = isUndefined(this.selectedMonth) ? 0 : this.selectedMonth;
    const rotation = 360 / 12 * (i - offset);
    const translation = 1300; // isUndefined(this.selectedMonth) ? 300 : 1200;
    const scale = isUndefined(this.selectedMonth) ? 0.25 : 1.0;

    return this.sanitizer.bypassSecurityTrustStyle(`scale(${scale}) rotate(${rotation}deg) translateY(-${translation}px)`);
  }

  public selectMonth(monthIndex: number) {
    this.selectedMonth = monthIndex === this.selectedMonth ? undefined : monthIndex;
  }

  public getDaysOfMonth(monthIndex: number) {
    const days = new Array<number>();
    const date = new Date(new Date().getFullYear(), monthIndex, 0);

    for (let i = 0; i < date.getDate(); i++) {
      days.push(i);
    }

    return days;
  }
}
