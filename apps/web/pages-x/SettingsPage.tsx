"use client";

import { ReactElement } from "react";
import { BackButton } from "../components/BackButton";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const SettingsPage = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const router = useRouter();

  const isDark = resolvedTheme === "dark";

  const handleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleClick = () => {
    router.push("/private/settings/chat-lock");
  };

  return (
    <div className="relative h-screen w-full">
      {/* header */}
      <div
        className="w-full py-4 flex justify-start items-center  gap-4
        border-b border-neutral-300 
        dark:border-neutral-700"
      >
        <BackButton href="/private" />
        <p className="text-[15px] font-semibold dark:text-neutral-100 text-neutral-800">
          Settings
        </p>
      </div>

      {/* main content */}

      <div className="w-full grid px-6 mt-4">
        {/* for themeing <LuMoon /> : <LuSun /> */}
        <SettingsBulbs
          icon={isDark ? <LuSun /> : <LuMoon />}
          label={isDark ? "Light Mode" : "Dark Mode"}
          onClick={handleTheme}
          isCondition={isDark}
        />

        <SettingsBulbs
          icon={<FiLock />}
          label={"Chat Lock"}
          onClick={handleClick}
          // TODO: here we have to get the data from the db that is the user'c chat lock disabled on enabled
          isCondition={false}
        />
      </div>
    </div>
  );
};

function SettingsBulbs({
  icon,
  label,
  onClick,
  isCondition,
}: {
  icon: ReactElement;
  label: string;
  isCondition: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="w-full flex justify-between items-center p-4 rounded-md cursor-pointer
      dark:hover:bg-neutral-800 hover:bg-neutral-100"
    >
      <div className="w-full flex justify-start items-center gap-4 dark:text-neutral-400 text-neutral-600">
        {icon}
        <p className="text-[14px] dark:text-neutral-100 text-neutral-800">
          {label}
        </p>
      </div>

      <ToggleButton isCondition={isCondition} />
    </div>
  );
}

function ToggleButton({ isCondition }: { isCondition: boolean }) {
  return (
    <div
      className={`h-6 w-10 px-1 rounded-full flex ${isCondition ? "justify-end" : "justify-start"} items-center 
      dark:bg-neutral-200
      bg-neutral-200`}
    >
      <div
        className="h-4 w-4 rounded-full
      bg-neutral-50
      dark:bg-neutral-800"
      />
    </div>
  );
}
