import Link from "next/link";

export const Dashboard = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-start px-5 pt-5">
      <h2 className="text-4xl font-semibold">Hello there, Madam.</h2>

      <div className="w-full grid grid-cols-3 mt-10">
        <Link
          href={"/chat"}
          className="w-full h-30 border-2 border-neutral-700 rounded-md flex justify-center items-center font-semibold text-[14px]"
        >
          Join private chatting area
        </Link>
      </div>
    </div>
  );
};
