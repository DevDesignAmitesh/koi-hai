interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
  label: string;
}

export const Input = ({ placeholder, label, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>
      <input
        className="p-2 rounded-md outline-none border border-neutral-700"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
