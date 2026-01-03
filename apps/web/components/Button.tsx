interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="w-full p-2 rounded-md text-[14px] font-semibold 
      dark:bg-neutral-200 dark:text-neutral-900
      bg-neutral-900 text-neutral-200
      "
      onClick={onClick}
    >
      {label}
    </button>
  );
};
