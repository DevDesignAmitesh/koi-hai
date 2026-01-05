import Link from "next/link";
import { BackButton } from "../components/BackButton";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { ReactElement } from "react";
import { RiChat3Line } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa";

export const PrivatePage = () => {
  return (
    <div className="relative h-screen w-full">
      {/* header */}
      <div
        className="w-full py-4 flex justify-between items-center 
        border-b border-neutral-300 
        dark:border-neutral-700"
      >
        <BackButton href="/" />

        {/* settings button */}
        <Link
          href={"/private/settings"}
          className="text-lg font-semibold dark:text-neutral-400 text-neutral-800 p-3 rounded-lg dark:hover:bg-neutral-800 hover:bg-neutral-100"
        >
          <IoSettingsOutline />
        </Link>
      </div>

      {/* main content */}

      <div className="w-full grid px-6 mt-6 gap-4">
        <FeatureBubble
          icon={<RiChat3Line />}
          label="Chat"
          href="/private/chat"
        />
        <FeatureBubble
          icon={<IoBookOutline />}
          label="Diary"
          href="/private/diary"
        />
        <FeatureBubble
          icon={<FaRegFolderOpen />}
          label="Vault"
          href="/private/vault"
        />
      </div>
    </div>
  );
};

function FeatureBubble({
  icon,
  label,
  href,
}: {
  icon: ReactElement;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex justify-start items-center gap-4 p-4 border rounded-md dark:border-neutral-600 border-neutral-300 
      dark:bg-neutral-800 bg-white
      dark:hover:bg-neutral-700 hover:bg-neutral-100"
    >
      <p className="dark:text-neutral-300 text-neutral-800 text-xl">{icon}</p>
      <p className="dark:text-neutral-200 text-neutral-800 font-semibold text-[15px]">
        {label}
      </p>
    </Link>
  );
}
