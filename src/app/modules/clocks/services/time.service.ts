import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private timeOffset = 0;
  private lastUpdate: number;
  private timeInSeconds = new Subject<Date>();
  private timeInMilliseconds = new Subject<Date>();

  constructor() {
    setInterval(this.update, 1);
  }

  private update = () => {
    const currentDate = new Date(Date.now() + this.timeOffset);

    // Update every 'seconds' resolution subscriber.
    if (currentDate.valueOf() % 1000 < this.lastUpdate % 1000) {
      this.timeInSeconds.next(currentDate);
    }

    // Update every 'milliseconds' resolution subscriber.
    this.timeInMilliseconds.next(currentDate);

    this.lastUpdate = currentDate.valueOf();
  }

  get InSeconds(): Subject<Date> {
    return this.timeInSeconds;
  }

  get InMilliseconds(): Subject<Date> {
    return this.timeInMilliseconds;
  }

  get Offset(): number {
    return this.timeOffset;
  }

  public updateOffset(milliseconds: number) {
    this.timeOffset = milliseconds;
  }
}
