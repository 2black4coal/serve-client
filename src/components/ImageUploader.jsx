// FILE: client/src/components/ImageUploader.jsx
// PURPOSE:
//   Upload image → return URL
// POINTS TO:
//   AdminCreateProduct.jsx
//   AdminEditProduct.jsx

import { useState } from "react";
import axios from "axios";

export default function ImageUploader({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

const { data } = await axios.post("http://localhost:5000/api/upload", formData, {

      headers: { "Content-Type": "multipart/form-data" }
    });

    onUpload(data.imageUrl);
  }

  return (
    <div style={styles.container}>
      <label style={styles.label}>Upload Image</label>

      <input type="file" onChange={uploadFile} style={styles.input} />

      {preview && <img src={preview} style={styles.preview} />}
    </div>
  );
}

const styles = {
  container: {
    background: "rgba(255,255,255,0.06)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.12)",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "16px",
    color: "#fff",
  },
  input: {
    marginBottom: "10px",
  },
  preview: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginTop: "10px",
  },
};
