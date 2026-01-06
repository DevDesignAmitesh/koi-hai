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
          info="Realtime end-to-end encrypted chats. This feature is under development and coming soon."
          href="/private/chat"
        />

        <FeatureBubble
          icon={<IoBookOutline />}
          label="Diary"
          info="A private space to share thoughts you want to say but can’t. Ready to use."
          href="/private/diary"
        />

        <FeatureBubble
          icon={<FaRegFolderOpen />}
          label="Vault"
          info="A secure dump for voice notes, images, and videos. Coming soon."
          href="/private/vault"
        />
      </div>
    </div>
  );
};

function FeatureBubble({
  icon,
  label,
  info,
  href,
}: {
  icon: ReactElement;
  label: string;
  info: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex justify-between items-center gap-4 p-4 border rounded-md 
      dark:border-neutral-600 border-neutral-300 
      dark:bg-neutral-800 bg-white
      dark:hover:bg-neutral-700 hover:bg-neutral-100"
    >
      {/* left side */}
      <div className="flex items-center gap-4">
        <p className="dark:text-neutral-300 text-neutral-800 text-xl">{icon}</p>
        <p className="dark:text-neutral-200 text-neutral-800 font-semibold text-[15px]">
          {label}
        </p>
      </div>

      {/* info tooltip */}
      <div className="relative">
        {/* ? circle */}
        <div
          className="w-5 h-5 flex items-center justify-center 
          rounded-full border 
          dark:border-neutral-500 border-neutral-400
          dark:text-neutral-300 text-neutral-700
          text-xs font-semibold cursor-pointer"
        >
          ?
        </div>

        {/* tooltip */}
        <div
          className="absolute right-0 top-7 z-10 w-64 
          opacity-0 scale-95 pointer-events-none
          transition-all duration-150
          group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
        >
          <div
            className="text-[11px] leading-relaxed p-2 rounded-md shadow-lg
            dark:bg-neutral-900 bg-white
            dark:text-neutral-200 text-neutral-700
            border dark:border-neutral-700 border-neutral-200"
          >
            {info}
          </div>
        </div>
      </div>
    </Link>
  );
}
