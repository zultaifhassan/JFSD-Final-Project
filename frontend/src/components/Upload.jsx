import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      await axios.post('http://localhost:1213/api/upload', formData);

     
      alert('Image uploaded successfully');
    } catch (error) {
  
      console.error('Error uploading image:', error.message);
    }
  };


  return (
    <div>
      <form>
        <input type="file" onChange={handleImageChange} />
        <button type="submit" onClick={handleImageUpload}>Upload</button>
      </form>
    </div>
  );
};

export default Upload;
