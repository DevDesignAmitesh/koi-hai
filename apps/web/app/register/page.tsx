"use client";

import { useState } from "react";
import { BackButton } from "../../components/BackButton";
import { InputBox } from "../../components/InputBox";
import { Button } from "../../components/Button";

interface RegisterProps {
  yourNickName: string;
  partnerNickName: string;
  phrase: string;
}

export default function register() {
  const [formData, setFormData] = useState<RegisterProps>({
    partnerNickName: "",
    phrase: "",
    yourNickName: "",
  });

  const handleChange = (val: string, index: keyof RegisterProps) => {
    setFormData((prev) => ({
      ...prev,
      [index]: val,
    }));
  };

  const handleSubmit = () => {};
  return (
    <div className="relative h-screen w-full">
      {/* header */}
      <div
        className="w-full py-4 flex justify-between items-center 
            border-b border-neutral-300 
            dark:border-neutral-700"
      >
        <BackButton href="/" />
      </div>

      <div className="w-full grid gap-6 px-8 mt-6">
        <InputBox
          label={"Your nickname"}
          placeholder={"Enter your nickname"}
          value={formData.yourNickName}
          onChange={(val) => handleChange(val, "yourNickName")}
        />

        <InputBox
          label={"Partner's nickname"}
          placeholder={"Enter partner's nickname"}
          value={formData.partnerNickName}
          onChange={(val) => handleChange(val, "partnerNickName")}
        />

        <InputBox
          type="phrase"
          label={"Secret phrase"}
          placeholder={"Enter or generate phrase"}
          value={formData.phrase}
          onChange={(val) => handleChange(val, "phrase")}
        />

        <Button label={"Continue"} onClick={handleSubmit} />
      </div>
    </div>
  );
}
