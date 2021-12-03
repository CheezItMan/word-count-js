export const wordCount = (str) => {
  const wordCounts = {};

  str = str.toLowerCase();
  if (str === '') {
    return wordCounts;
  }

  // Split on anything that's not:
  //    1.  a-z
  //    2.  0-9
  //    3.  "'s"

  str = str.replaceAll(/\'s/g, '@');
  // "that's" -->  "that@"
  str = str.replaceAll(/[^\w\s@]/g, '');
  // "that@"  --> "that's"
  str = str.replaceAll('@', "'s");
  const words = str.split(/\s+/);
  // 'Hello     world' ==> ['Hello', 'world]

  words.forEach((word) => {
    //word = word.toLowerCase();
    // 'Hello' --> 'hello'
    if (!wordCounts[word]) {
      wordCounts[word] = 0;
    }
    wordCounts[word] += 1;
  });
  return wordCounts;
};
