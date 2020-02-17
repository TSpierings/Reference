import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-fibonacci-clock',
  templateUrl: './fibonacci-clock.component.html',
  styleUrls: ['./fibonacci-clock.component.scss']
})
export class FibonacciClockComponent {

  public date = new Date();

  constructor(timeService: TimeService) {
    timeService.InSeconds.subscribe(this.update);
  }

  private update = (date: Date) => {
    this.date = date;
  }
}
