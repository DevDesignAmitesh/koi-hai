export const phrasesGenerator = () => {
  // script for creating phrases like choco-choco-some-choco
  const random_words = ["hello", "choco", "some", "hi"];

  let str = "";

  for (let i = 0; i < 4; i++) {
    str += random_words[Math.floor(Math.random() * random_words.length)] + " ";
  }

  str
    .split(" ")
    .filter((val) => val !== "")
    .join("-");

  return str;
};
