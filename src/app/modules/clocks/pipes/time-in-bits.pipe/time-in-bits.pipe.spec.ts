import { TimeInBitsPipe } from './time-in-bits.pipe';

describe('TimeInBitsPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeInBitsPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    // Arrange
    const pipe = new TimeInBitsPipe();
    const date = new Date('2020-01-01T15:24:59');

    // Act
    const result = pipe.transform(date);

    // Assert
    expect(result.length).toBe(6); // 6 columns
    expect(result[0].length).toBe(4); // 4 rows
    expect(result[0]).toBe([false, false, false, true]); // first digit of the hour is 1
    expect(result[1]).toBe([false, true, false, true]); // second digit is 5
  });
});
