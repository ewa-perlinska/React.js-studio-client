import React, { useState } from "react";

function UploadImages() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "qcq8titl");
    setLoading(true);
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/eperlinska/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await response.json();

    // const updateStudioResponse = await fetch("localhost:3000/studios/1", {
    //   method: "PATCH",
    //   body: { imageUrl: file.secure_url }
    // });

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="UploadImage">
      <h1> Upload image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload and image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading ... </h3>
      ) : (
        <img src={image} style={{ width: "300px" }} />
      )}
    </div>
  );
}

export default UploadImages;
