import { FillForPipe } from './fill-for.pipe';

describe('FillForPipe', () => {
  it('create an instance', () => {
    const pipe = new FillForPipe();
    expect(pipe).toBeTruthy();
  });

  it('it to fill from 2 to 10', () => {
    // Arrange
    const pipe = new FillForPipe();

    // Act
    const result = pipe.transform(2, 10);

    // Assert
    expect(result.length).toBe(8);
    for(let i = 2; i < 10; i++) {
      expect(result[i]).toBe(i);
    }
  });

  it('it to return an empty array when the size is 0', () => {
    // Arrange
    const pipe = new FillForPipe();

    // Act
    const result = pipe.transform(5, 5);

    // Assert
    expect(result.length).toBe(0);
  });

  it('it to return an empty array when the size is negative', () => {
    // Arrange
    const pipe = new FillForPipe();

    // Act
    const result = pipe.transform(10, 5);

    // Assert
    expect(result.length).toBe(0);
  });
});
