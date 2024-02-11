import React from "react";
import "../addToCastButton/addToCastBtn.css";

interface addToCastBtnProps {
  castName: string;
  onAddToCast: (castName: string) => void;
  setCastName: () => void;
}

const AddToCastBtn: React.FC<addToCastBtnProps> = ({
  castName,
  onAddToCast,
  setCastName,
}) => {
  const handleAddToCast = () => {
    onAddToCast(castName.trim());
    setCastName();
  };

  return (
    <div>
      <button className="addcastBtn" onClick={handleAddToCast}>
        Add to Cast
      </button>
    </div>
  );
};

export default AddToCastBtn;
