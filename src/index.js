export const wordCount = (str) => {
  str = str.replaceAll(/\'s/g, '©');
  str = str.replaceAll(/[^\w\s©]/g, '');
  str = str.replaceAll('©', "'s");
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
