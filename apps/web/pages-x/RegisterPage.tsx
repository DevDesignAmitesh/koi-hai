"use client";

import { JSX, useState } from "react";
import { BackButton } from "../components/BackButton";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { CreatePairProps } from "@repo/types/types";
import { useCreatePair } from "@repo/hooks/hooks";
import { HTTP_URL, notify } from "../utils/lib";
import { useRouter } from "next/navigation";

export default function RegisterPage(): JSX.Element {
  const router = useRouter();

  const [formData, setFormData] = useState<CreatePairProps>({
    partnersNickName: "",
    phrase: "",
    yourNickName: "",
  });

  const handleChange = (val: string, index: keyof CreatePairProps) => {
    setFormData((prev) => ({
      ...prev,
      [index]: val,
    }));
  };

  const { handleCreatePair, loading } = useCreatePair();

  const handleSuccess = () => {
    router.push("/login");
  };

  const handleSubmit = () => {
    handleCreatePair({
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
          label={"Partner's nickname"}
          placeholder={"Enter partner's nickname"}
          value={formData.partnersNickName}
          onChange={(val) => handleChange(val, "partnersNickName")}
        />

        <InputBox
          disabled={loading}
          type="phrase"
          label={"Secret phrase"}
          placeholder={"Enter or generate phrase"}
          value={formData.phrase}
          onChange={(val) => handleChange(val, "phrase")}
        />

        <Button
          disabled={loading}
          label={loading ? "Processing...." : "Continue"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
