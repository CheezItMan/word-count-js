import { wordCount } from '../src';

describe('wordCount', () => {
  test('it should exist', () => {
    expect(wordCount).toBeDefined();
  });

  test('counts one word', () => {
    //arrange
    const word = 'hello';

    //act/assert
    expect(wordCount(word)).toEqual({ hello: 1 });
  });

  test('returns an empty object for empty string', function () {
    // Arrange
    const str = '';

    // Act
    const result = wordCount(str);

    // Assert
    expect(result).toEqual({});
  });

  test('counts two lowercase words', () => {
    // Arrange
    const str = 'hello world';

    // Act
    const result = wordCount(str);

    // Assert
    expect(result).toEqual({
      hello: 1,
      world: 1,
    });
  });

  test('ignore case', () => {
    // Arrange
    const str = 'hello world Hello WORLD';

    // Act
    const result = wordCount(str);

    // Assert
    expect(result).toEqual({
      hello: 2,
      world: 2,
    });
  });

  test(`ignores special characters except 's`, () => {
    // Arrange
    const str = `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`;

    // Act
    const result = wordCount(str);

    // Arrange
    expect(result).toEqual({
      "that's": 1,
      the: 2,
      password: 2,
      123: 1,
      cried: 1,
      special: 1,
      agent: 1,
      so: 1,
      i: 1,
      fled: 1,
    });
  });
});
