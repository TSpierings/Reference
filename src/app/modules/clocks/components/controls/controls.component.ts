import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  constructor(public timeService: TimeService) { }

  public updateTime(value: number) {
    this.timeService.updateOffset(value * 1000);
  }

}
