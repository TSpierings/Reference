import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-berlin-uhr',
  templateUrl: './berlin-uhr.component.html',
  styleUrls: ['./berlin-uhr.component.scss']
})
export class BerlinUhrComponent {

  public date = new Date();

  constructor(timeService: TimeService) {
    timeService.InSeconds.subscribe(this.update);
  }

  private update = (date: Date) => {
    this.date = date;
  }
}
