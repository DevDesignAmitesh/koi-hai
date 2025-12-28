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
  return <Button label="Generate" onClick={handleGeneration} />;
};
