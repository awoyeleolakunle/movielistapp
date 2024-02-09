import React, { useState } from "react";
import "../castInput/castInput.css";
import TextInput from "../textInput/textInput";
import { EMPTY_STRING } from "../../../../constants";

interface CastInputProps {
  onAddToCast: (castName: string) => void;
}

const CastInput: React.FC<CastInputProps> = ({ onAddToCast }) => {
  const [castName, setCastName] = useState<string>(EMPTY_STRING);

  const handleAddToCast = () => {
    if (castName.trim() !== EMPTY_STRING) {
      onAddToCast(castName.trim());
      setCastName(EMPTY_STRING);
    }
  };

  return (
    <div>
      <TextInput
        label="Cast"
        name="cast"
        value={castName}
        onChange={(e) => setCastName(e.target.value)}
      />
      <button className="addcastBtn" onClick={handleAddToCast}>
        Add to Cast
      </button>
    </div>
  );
};

export default CastInput;
