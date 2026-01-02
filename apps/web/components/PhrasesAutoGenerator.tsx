import { phrasesGenerator } from "../utils/phrase-generator";
import { Button } from "./Button";

interface PhrasesAutoGeneratorProps {
  onChange: (e: string) => void;
}

export const PhrasesAutoGenerator = ({
  onChange,
}: PhrasesAutoGeneratorProps) => {
  const handleGeneration = () => {
    onChange(phrasesGenerator());
  };
  return (
    <button
      onClick={handleGeneration}
      className="border-2 text-[14px] font-semibold border-neutral-700 text-neutral-700 p-2 rounded-md w-full text-center"
    >
      Auto Generate Phrases
    </button>
  );
};
