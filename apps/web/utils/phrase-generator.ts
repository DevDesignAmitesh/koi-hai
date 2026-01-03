const generateRandomWords = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const phrasesGenerator = () => {
  // script for creating phrases like choco-choco-some-choco
  const random_words_1 = ["hello", "how", "are", "you"];
  const random_words_2 = ["am", "here", "cone", "see"];
  const random_words_3 = ["hello", "choco", "some", "hi"];

  return `${generateRandomWords(random_words_1)}-${generateRandomWords(random_words_2)}-${generateRandomWords(random_words_3)}`;
};
