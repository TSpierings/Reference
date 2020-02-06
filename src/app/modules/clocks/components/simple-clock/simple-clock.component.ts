import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-simple-clock',
  templateUrl: './simple-clock.component.html',
  styleUrls: ['./simple-clock.component.scss']
})
export class SimpleClockComponent {

  public date = new Date();

  constructor(timeService: TimeService) {
    timeService.InMilliseconds.subscribe(this.update);
  }

  private update = (date: Date) => {
    this.date = date;
  }

}
