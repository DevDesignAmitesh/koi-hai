import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export const BackButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="text-lg font-semibold dark:text-neutral-400 text-neutral-800 p-3 rounded-lg dark:hover:bg-neutral-800 hover:bg-neutral-100"
    >
      <IoMdArrowBack />
    </Link>
  );
};
