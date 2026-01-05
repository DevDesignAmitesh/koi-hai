"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        h-10 w-10 text-xl flex items-center justify-center rounded-lg cursor-pointer
        text-neutral-500 hover:bg-neutral-200
        dark:text-neutral-400 dark:hover:bg-neutral-800
      "
    >
      {isDark ? <LuSun /> : <LuMoon />}
    </button>
  );
};
