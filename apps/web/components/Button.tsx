interface ButtonProps {
  label: string;
  disabled: boolean;
  onClick: () => void;
}

export const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
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
