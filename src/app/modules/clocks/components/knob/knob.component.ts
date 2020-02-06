import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent {

  @Output() valueChanged = new EventEmitter<number>();

  public value = 0;

  private lastAngle = 0;
  private fullRotations = 0;
  private manipulationCenter: Array<number>;

  constructor() { }

  /**
   * Save the center of the mouse click and add listeners for the update/end functions.
   */
  startKnobManipulation(event: MouseEvent) {
    this.manipulationCenter = [event.screenX, event.screenY];
    window.addEventListener('mousemove', this.manipulationUpdate);
    window.addEventListener('mouseup', this.endManipulation);
  }

  /**
   * Calculate the angle between the first click and the current mouse position and publish the value.
   */
  manipulationUpdate = (event: MouseEvent) => {
    const dirX = event.screenX - this.manipulationCenter[0];
    const dirY = event.screenY - this.manipulationCenter[1];
    const angle = (Math.atan2(dirY, dirX) * 180 / Math.PI) + 180;

    // If the angle flips more than -300 degrees in one go, it passed from 360 to 0, so increase a rotation.
    if (angle - this.lastAngle < -300) {
      this.fullRotations += 1;
    }

    // If the angle flips more than 300 degrees in one go, it passed from 0 to 360, so decrease a rotation.
    if (angle - this.lastAngle > 300) {
      this.fullRotations -= 1;
    }

    this.value = 360 * this.fullRotations + angle;
    this.lastAngle = angle;
    this.valueChanged.next(this.value);
  }

  /**
   * Remove all event listeners.
   */
  endManipulation = (event: MouseEvent) => {
    window.removeEventListener('mousemove', this.manipulationUpdate);
    window.removeEventListener('mouseup', this.endManipulation);
  }

}
