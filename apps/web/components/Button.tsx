interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="p-2 rounded-md bg-neutral-700 text-neutral-100"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
