import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillFor'
})
export class FillForPipe implements PipeTransform {

  /**
   * Generate an array the size of end-start, filled with the index.
   */
  transform(start: number, end: number): Array<number> {
    if (end <= start) {
      return [];
    }

    return Array.from(Array(end - start).keys());
  }

}
