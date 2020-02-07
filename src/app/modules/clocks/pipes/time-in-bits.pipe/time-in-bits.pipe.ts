import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeInBits'
})
export class TimeInBitsPipe implements PipeTransform {

  /**
   * Get all the bits of a date's time in BCD format.
   * BCD: https://en.wikipedia.org/wiki/Binary-coded_decimal
   */
  transform(date: Date): Array<Array<boolean>> {
    return [
      this.getBitArray(date.getHours() / 10),
      this.getBitArray(date.getHours() % 10),
      this.getBitArray(date.getMinutes() / 10),
      this.getBitArray(date.getMinutes() % 10),
      this.getBitArray(date.getSeconds() / 10),
      this.getBitArray(date.getSeconds() % 10)
    ];
  }

  /**
   * Get all the bits of a given a number (limited to 4 bits) in big-endian.
   * For example (10) => [1, 0, 1, 0].
   */
  private getBitArray(n: number): Array<boolean> {
    return [
      this.isBitSet(n, 4),
      this.isBitSet(n, 3),
      this.isBitSet(n, 2),
      this.isBitSet(n, 1)
    ];
  }

  /**
   * Check if the kth bit of n is set.
   * For example (n, k) => (5, 1) => true because 5 is '101' so the first and the third bits are set.
   */
  private isBitSet(n: number, k: number): boolean {
    // tslint:disable-next-line: no-bitwise
    return (n & (1 << (k - 1))) > 0;
  }

}
