import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonacciTimeState'
})
export class FibonacciTimeStatePipe implements PipeTransform {

  private lookupTable = [
    // 5, 3, 2, 1, 1
    [0, 0, 0, 0, 0], // 0.
    [0, 0, 0, 1, 0], // 1.
    [0, 0, 1, 0, 0], // 2.
    [0, 0, 1, 1, 0], // 3.
    [0, 1, 0, 1, 0], // 4.
    [1, 0, 0, 0, 0], // 5.
    [1, 0, 0, 1, 0], // 6.
    [1, 0, 1, 0, 0], // 7.
    [1, 1, 0, 0, 0], // 8.
    [1, 1, 0, 1, 0], // 9.
    [1, 1, 1, 0, 0], // 10.
    [1, 1, 1, 1, 0], // 11.
    [1, 1, 1, 1, 1]  // 12.
  ];

  private stateTable = [
    'empty',
    'hour',
    'minute',
    'both'
  ];

  /**
   * This pipe returns the sector states for a given time, Big endian style.
   *
   * 7:45 has the following states for sectors (sector: state):
   * 5: both
   * 3: minutes
   * 2: hours
   * 1: minutes
   * 0: empty
   *
   * The hour hand is all sectors with state 1 and 3, in the given example: sectors 5 + 2 = 7.
   * The minute hand is all sectors with state 2 and 3, multiplied by 9. In the given example: (sectors 5 + 3 + 1 = 9) * 5 = 45 minutes.
   * @param date The date that is shown in the fibonacci clock.
   */
  transform(date: Date): Array<string> {
    const hours = date.getHours() % 12;
    const minutes = Math.floor(date.getMinutes() / 5);

    return [
      this.stateTable[this.lookupTable[hours][0] + this.lookupTable[minutes][0] * 2],
      this.stateTable[this.lookupTable[hours][1] + this.lookupTable[minutes][1] * 2],
      this.stateTable[this.lookupTable[hours][2] + this.lookupTable[minutes][2] * 2],
      this.stateTable[this.lookupTable[hours][3] + this.lookupTable[minutes][3] * 2]
    ];
  }
}
