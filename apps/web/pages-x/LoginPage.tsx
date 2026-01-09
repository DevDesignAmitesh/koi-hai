"use client";

import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BackButton } from "../components/BackButton";
import { useCompletePair } from "@repo/hooks/hooks";
import { HTTP_URL, notify } from "../utils/lib";
import { PairingProps } from "@repo/types/types";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<PairingProps>({
    phrase: "",
    yourNickName: "",
  });

  const handleChange = (val: string, index: keyof PairingProps) => {
    setFormData((prev) => ({
      ...prev,
      [index]: val,
    }));
  };

  const { loading, handleCompletePair } = useCompletePair();

  const handleSuccess = (token: string, redirectUrl: string) => {
    localStorage.setItem("token", token);
    router.push(redirectUrl);
  };

  const handleSubmit = () => {
    handleCompletePair({
      input: formData,
      handleSuccess,
      HTTP_URL: HTTP_URL,
      notify: notify,
    });
  };
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
          disabled={loading}
          label={"Your nickname"}
          placeholder={"Enter your nickname"}
          value={formData.yourNickName}
          onChange={(val) => handleChange(val, "yourNickName")}
        />

        <InputBox
          disabled={loading}
          type="phrase"
          mode="login"
          label={"Secret phrase"}
          placeholder={"Enter phrase shared by your partner"}
          value={formData.phrase}
          onChange={(val) => handleChange(val, "phrase")}
        />

        <Button disabled={loading} label={"Continue"} onClick={handleSubmit} />
      </div>
    </div>
  );
}
