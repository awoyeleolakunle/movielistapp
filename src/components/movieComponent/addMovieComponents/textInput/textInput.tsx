import React from "react";
import "../textInput/textInput.css";

interface textInputDetails {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<textInputDetails> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        id={name + "id"}
        name={name}
        value={value}
        placeholder={`enter ${label.toLowerCase()}`}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
