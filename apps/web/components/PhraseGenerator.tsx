import { GrPowerCycle } from "react-icons/gr";
import { phrasesGenerator } from "../utils/phrase-generator";

interface PhraseGeneratorProps {
  onChange: (val: string) => void;
}

export const PhraseGenerator = ({ onChange }: PhraseGeneratorProps) => {
  const handleClick = () => {
    onChange(phrasesGenerator());
  };
  return (
    <div
      onClick={handleClick}
      className="text-[15px] font-semibold p-3 rounded-lg border cursor-pointer
      dark:text-neutral-400 text-neutral-800 
      dark:border-neutral-700 border-neutral-300 
      "
    >
      <GrPowerCycle />
    </div>
  );
};
