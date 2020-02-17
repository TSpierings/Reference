import { Pipe, PipeTransform } from '@angular/core';

export interface BerlinUhr {
  even: boolean;
  hourMajor: number;
  hourMinor: number;
  minuteMajor: number;
  minuteMinor: number;
}

@Pipe({
  name: 'berlinUhrTime'
})
export class BerlinUhrTimePipe implements PipeTransform {

  transform(date: Date): BerlinUhr {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return {
      even: minutes % 2 === 0,
      hourMajor: Math.floor(hours / 5),
      hourMinor: hours % 5,
      minuteMajor: Math.floor(minutes / 5),
      minuteMinor: minutes % 5
    } as BerlinUhr;
  }
}
