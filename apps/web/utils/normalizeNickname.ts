// input here manily be a name.
export const normalizeNickname = (input: string) => {
  const output = input.trim().toLowerCase().normalize("NFKC");
  console.log("output", output);
  return output;
};
