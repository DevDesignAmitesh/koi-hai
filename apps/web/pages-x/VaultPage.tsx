import { BackButton } from "../components/BackButton";
export const VaultPage = () => {
  return (
    <div className="relative h-screen w-full">
      {/* header */}
      <div
        className="w-full py-4 gap-4 flex justify-start items-center 
              border-b border-neutral-300 
              dark:border-neutral-700"
      >
        <BackButton href="/private" />

        <p className="text-[15px] font-semibold dark:text-neutral-100 text-neutral-800">
          Vault
        </p>
      </div>

      <p
        className="mt-20 text-sm text-center w-full
        dark:text-neutral-400 text-neutral-600"
      >
        Sharing voice notes, images and videos are coming soon <br /> Stay tuned
        😉!!
      </p>
    </div>
  );
};
