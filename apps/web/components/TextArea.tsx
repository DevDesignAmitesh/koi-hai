import { Dispatch, SetStateAction, useRef } from "react";
import { FiSend } from "react-icons/fi";

interface TextAreaProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const TextArea = ({ value, onChange }: TextAreaProps) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = () => {
    const el = textRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <div
      className="absolute w-full bottom-0 px-2 py-4 border-t
      dark:border-neutral-600 border-neutral-300 flex justify-center items-center gap-2"
    >
      <textarea
        onChange={(e) => onChange(e.target.value)}
        value={value}
        onInput={autoResize}
        ref={textRef}
        className="outline-none overflow-hidden h-13 max-h-40 resize-none bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md w-full placeholder:text-[14px] text-[14px] placeholder:text-neutral-600 dark:placeholder:text-neutral-400"
        placeholder="Write something...."
      />
      <button className="text-lg cursor-pointer font-semibold dark:text-neutral-400 text-neutral-800 p-4 rounded-lg dark:hover:bg-neutral-800 hover:bg-neutral-200">
        <FiSend />
      </button>
    </div>
  );
};
