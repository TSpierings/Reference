import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-circular-calendar',
  templateUrl: './circular-calendar.component.html',
  styleUrls: ['./circular-calendar.component.scss']
})
export class CircularCalendarComponent {

  public months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public selectedMonth = 0;
  public isFocused = false;

  private rotationOffset = 0;

  constructor(private sanitizer: DomSanitizer) { }

  public getTransform(i: number): SafeStyle {
    const rotation = 30 * i + this.rotationOffset;
    const scale = this.isFocused ? 1.0 : 0.25;

    return this.sanitizer.bypassSecurityTrustStyle(`scale(${scale}) rotate(${rotation}deg) translateY(-1300px)`);
  }

  public selectMonth(monthIndex: number) {
    const res = this.closestRotation(this.selectedMonth, monthIndex);
    this.rotationOffset += res;

    if (this.selectedMonth === monthIndex) {
      this.isFocused = !this.isFocused;
    } else {
      this.isFocused = true;
    }

    this.selectedMonth = monthIndex;
  }

  /**
   * Get the closest rotational distance towards the targetIndex, based on a 12-distance space.
   */
  private closestRotation(currentIndex: number, targetIndex: number): number {
    const absoluteClockwiseDistance = Math.abs(currentIndex - targetIndex);
    const smallestDistance = Math.min(absoluteClockwiseDistance, 12 - absoluteClockwiseDistance);
    const direction = currentIndex - targetIndex < 0 ? -1 : 1;
    const reverse = absoluteClockwiseDistance > 6 ? -1 : 1;
    return smallestDistance * (direction * reverse) * 30;
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
