"use client";

import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { PhrasesAutoGenerator } from "../components/PhrasesAutoGenerator";

export interface FormDataProps {
  yourNickName: string;
  partnerNickName: string;
  phrase: string;
}

export type startType = "create" | "join";

export default function Onboarding({ type }: { type: startType }) {
  const [formData, setFormData] = useState<FormDataProps>({
    yourNickName: "",
    partnerNickName: "",
    phrase: "",
  });

  const [phrase, setPhrase] = useState<string>("");

  const handleChange = (value: string, index: keyof FormDataProps) => {
    setFormData((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmission = async () => {};

  useEffect(() => {
    const newValue = phrase.split(" ").join("-");
    handleChange(newValue, "phrase");
  }, [phrase]);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-semibold">
        {type === "create"
          ? "Create Your Private Space"
          : "Join Your Private Space"}
      </h1>

      <div className="flex flex-col gap-4">
        <Input
          label="Your Nick Name"
          placeholder="eg: Sir"
          value={formData.yourNickName}
          onChange={(e) => handleChange(e, "yourNickName")}
        />
        <Input
          label="Your Partner's Nick Name"
          placeholder="eg: Madam"
          value={formData.partnerNickName}
          onChange={(e) => handleChange(e, "partnerNickName")}
        />

        <Input
          label={
            type === "create"
              ? "Enter a phrase that you and your partner should remember"
              : "Enter a phrase that your pratners shares with you"
          }
          placeholder="eg: my-madam-ji-is-best"
          value={formData.phrase}
          onChange={(e) => setPhrase(e)}
        />

        {/* phrases auto generator */}
        {type === "create" && (
          <PhrasesAutoGenerator onChange={(e) => handleChange(e, "phrase")} />
        )}
        <Button label="Next" onClick={handleSubmission} />
      </div>
    </div>
  );
}
