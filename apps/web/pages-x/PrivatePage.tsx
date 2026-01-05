import Link from "next/link";
import { BackButton } from "../components/BackButton";
import { IoSettingsOutline } from "react-icons/io5";

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
    </div>
  );
};
