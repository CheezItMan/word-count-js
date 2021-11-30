export const wordCount = (str) => {
  str = str.replaceAll(/[^A-Za-z\d\'\s]/g, '');
  const words = str.split(/\s/);

  const freqMap = {};

  for (let word of words) {
    word = word.toLowerCase();
    if (freqMap[word] === undefined) {
      freqMap[word] = 0;
    }
    freqMap[word] += 1;
  }

  return freqMap;
};
