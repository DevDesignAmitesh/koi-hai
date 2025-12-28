import Link from "next/link";

export default function IntroPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
      <h1>Join or Create Your Private Space</h1>

      <div className="flex flex-col gap-4">
        <Link href={"/join"}>Join</Link>
        <Link href={"/create"}>Create</Link>
      </div>
    </div>
  );
}
