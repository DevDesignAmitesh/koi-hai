import Link from "next/link";

export default function IntroPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-semibold">
        Join or Create Your Private Space
      </h1>

      <div className="flex flex-col gap-4 items-center justify-center w-full px-20">
        <Link
          className="bg-neutral-700 text-neutral-100 p-2 rounded-md w-full text-center"
          href={"/join"}
        >
          Join
        </Link>
        <Link
          className="border-2 border-neutral-700 text-neutral-700 p-2 rounded-md w-full text-center"
          href={"/create"}
        >
          Create
        </Link>
      </div>
    </div>
  );
}
