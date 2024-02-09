import React, { useState, ChangeEvent } from "react";
import "../imageInputComponent/imageInput.css";
import handleImageUpload from "../../../../reusableComponents/handleImageUpload";

interface ImageInputHandlerProps {
  setNewImageUrl: (url: string) => void;
}

const ImageInputHandler: React.FC<ImageInputHandlerProps> = ({
  setNewImageUrl,
}) => {
  const uploadImageToCloudinary = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const url = await handleImageUpload(event);
    if (url) setNewImageUrl(url);
  };
  return (
    <div className="form-group">
      <label htmlFor="movieImage">Movie Image:</label>
      <input
        type="file"
        id="imageId"
        name="movieImage"
        onChange={uploadImageToCloudinary}
      />
    </div>
  );
};

export default ImageInputHandler;
