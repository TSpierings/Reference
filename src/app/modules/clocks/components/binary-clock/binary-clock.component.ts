import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-binary-clock',
  templateUrl: './binary-clock.component.html',
  styleUrls: ['./binary-clock.component.scss']
})
export class BinaryClockComponent {

  public date = new Date();

  constructor(timeService: TimeService) {
    timeService.InSeconds.subscribe(this.update);
  }

  private update = (date: Date) => {
    this.date = date;
  }
}
