import React, { useState } from "react";
import "../castInput/castInput.css";
import TextInput from "../textInput/textInput";
import { EMPTY_STRING } from "../../../../constants";
import AddToCastBtn from "../addToCastButton/addToCastBtn";

interface CastInputProps {
  onAddToCast: (castName: string) => void;
}

const CastInput: React.FC<CastInputProps> = ({ onAddToCast }) => {
  const [castName, setCastName] = useState<string>(EMPTY_STRING);

  const handleAddToCast = () => {
    if (castName.trim() !== EMPTY_STRING) {
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
      <AddToCastBtn
        castName={castName}
        onAddToCast={onAddToCast}
        setCastName={() => setCastName(EMPTY_STRING)}
      />
    </div>
  );
};

export default CastInput;
