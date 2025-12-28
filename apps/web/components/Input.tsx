interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
  label: string;
}

export const Input = ({ placeholder, label, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
