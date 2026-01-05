"use client";

import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BackButton } from "../components/BackButton";

interface LoginProps {
  yourNickName: string;
  phrase: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginProps>({
    phrase: "",
    yourNickName: "",
  });

  const handleChange = (val: string, index: keyof LoginProps) => {
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
          type="phrase"
          mode="login"
          label={"Secret phrase"}
          placeholder={"Enter phrase shared by your partner"}
          value={formData.phrase}
          onChange={(val) => handleChange(val, "phrase")}
        />

        <Button label={"Continue"} onClick={handleSubmit} />
      </div>
    </div>
  );
}
