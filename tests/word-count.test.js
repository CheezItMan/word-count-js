import { wordCount } from '../src';

describe('wordCount', () => {
  test('it should exist', () => {
    expect(wordCount).toBeDefined();
  });

  test('counts one word', () => {
    expect(wordCount('hello')).toEqual({ hello: 1 });
  });

  test('works with two words separated by a space', () => {
    // Act
    const answer = wordCount('hello world');

    // Assert
    expect(answer).toEqual({
      hello: 1,
      world: 1,
    });
  });

  test('ignore case', () => {
    // Act
    const answer = wordCount('hello world Hello World');

    // Assert
    expect(answer).toEqual({
      hello: 2,
      world: 2,
    });
  });

  test('works with the example from the README', () => {
    // Arrange
    const sentence = `"That's the password: PASSWORD 123!", cried the Special Agent.\nSo I fled.`;

    // Act
    const answer = wordCount(sentence);

    const correctAnswer = {
      "that's": 1,
      the: 2,
      password: 2,
      cried: 1,
      special: 1,
      agent: 1,
      so: 1,
      i: 1,
      fled: 1,
    };

    correctAnswer['123'] = 1;
    // Assert
    expect(answer).toEqual(correctAnswer);
  });
});
