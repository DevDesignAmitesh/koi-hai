"use client";

import { LuDelete } from "react-icons/lu";
import { BackButton } from "../components/BackButton";
import { useEffect, useState } from "react";
import { useVerifyPin } from "@repo/hooks/hooks";
import { HTTP_URL, notify } from "../utils/lib";
import { useRouter } from "next/navigation";

export const PinVerifyPage = () => {
  if (typeof window === "undefined") return;

  const TOKEN = localStorage.getItem("token");

  const [pin, setPin] = useState<string>("");

  const router = useRouter();

  const handleSetPin = (val: string) => {
    if (pin.length === 6) return;
    setPin((prev) => `${prev}${val}`);
  };

  const handleDelPin = () => {
    if (pin.length < 1) return;
    setPin(pin.slice(0, pin.length - 1));
  };

  const handleSuccess = () => {
    router.push("/private");
  };

  const { handleVerifyPin, loading } = useVerifyPin();

  const handleSubmit = () => {
    if (loading) return;
    if (!TOKEN) return;

    handleVerifyPin({
      input: {
        pin,
      },
      handleSuccess,
      HTTP_URL: HTTP_URL,
      notify: notify,
      TOKEN: TOKEN,
    });
  };

  useEffect(() => {
    if (pin.length === 6) {
      handleSubmit();
    }
  }, [pin]);

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center">
      {/* header */}
      <div
        className="w-full py-4 flex justify-between items-center absolute top-0 
        border-b border-neutral-300 
        dark:border-neutral-700"
      >
        <BackButton href="/login" />
      </div>

      <h3 className="text-xl font-semibold dark:text-neutral-100 text-neutral-800">
        {"Enter Pin"}
      </h3>
      <p className="text-[15px] dark:text-neutral-400 text-neutral-500 mt-2">
        {"Enter a 6-digit PIN"}
      </p>

      {/* opt completion layout */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <p
          className={`h-3 w-3 rounded-full  
            ${pin.length >= 1 ? "dark:bg-neutral-200 bg-neutral-800" : "dark:bg-neutral-800 bg-neutral-200"}`}
        />
        <p
          className={`h-3 w-3 rounded-full  
            ${pin.length >= 2 ? "dark:bg-neutral-200 bg-neutral-800" : "dark:bg-neutral-800 bg-neutral-200"}`}
        />
        <p
          className={`h-3 w-3 rounded-full  
            ${pin.length >= 3 ? "dark:bg-neutral-200 bg-neutral-800" : "dark:bg-neutral-800 bg-neutral-200"}`}
        />
        <p
          className={`h-3 w-3 rounded-full  
            ${pin.length >= 4 ? "dark:bg-neutral-200 bg-neutral-800" : "dark:bg-neutral-800 bg-neutral-200"}`}
        />
        <p
          className={`h-3 w-3 rounded-full  
            ${pin.length >= 5 ? "dark:bg-neutral-200 bg-neutral-800" : "dark:bg-neutral-800 bg-neutral-200"}`}
        />
        <p
          className={`h-3 w-3 rounded-full  
            ${pin.length >= 6 ? "dark:bg-neutral-200 bg-neutral-800" : "dark:bg-neutral-800 bg-neutral-200"}`}
        />
      </div>

      <div className="grid grid-cols-3 place-content-center place-items-center mt-12 gap-2">
        {Array.from({ length: 12 }).map((_, idx) => {
          if (idx + 1 === 10) {
            return (
              <div
                key={idx}
                className="h-14 w-28 flex justify-center items-center"
              />
            );
          }
          if (idx + 1 === 12) {
            return (
              <div
                onClick={handleDelPin}
                key={idx}
                className="h-14 w-28 flex justify-center items-center text-xl  rounded-md
                dark:hover:bg-neutral-800 hover:bg-neutral-200
                dark:text-neutral-200 text-neutral-700"
              >
                <LuDelete />
              </div>
            );
          }
          return (
            <div
              onClick={() => handleSetPin(`${idx + 1}`)}
              key={idx}
              className="h-14 w-28 flex justify-center items-center rounded-md text-xl font-semibold cursor-pointer
            dark:hover:bg-neutral-800 hover:bg-neutral-200
            dark:text-neutral-200 text-neutral-700
            "
            >
              {idx + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};
