import React from "react";
import { PhraseGenerator } from "./PhraseGenerator";

interface InputBoxProps {
  type?: "phrase";
  mode?: "login";
  label: string;
  disabled: boolean;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

export const InputBox = ({
  type,
  mode,
  label,
  placeholder,
  value,
  onChange,
  disabled,
}: InputBoxProps) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <label className="font-semibold text-[14px] dark:text-neutral-200 text-neutral-800">
        {label}
      </label>
      {type === "phrase" && mode !== "login" ? (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="flex justify-center items-center gap-4 w-full">
            <input
              disabled={disabled}
              className="p-2 rounded-md border w-full placeholder:text-[14px]
            dark:border-neutral-700 border-neutral-300 
            dark:placeholder:text-neutral-400 placeholder:text-neutral-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />

            <PhraseGenerator onChange={onChange} />
          </div>
          <p
            className="w-full text-xs py-4 rounded-md text-center
            dark:bg-neutral-800 dark:text-neutral-300
            bg-neutral-100 text-neutral-600
            "
          >
            Share with your partner && DO NOT FORGET IT.
          </p>
        </div>
      ) : (
        <input
          className="p-2 rounded-md border w-full placeholder:text-[14px]
        dark:border-neutral-700 border-neutral-300 
        dark:placeholder:text-neutral-400 placeholder:text-neutral-500"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};
