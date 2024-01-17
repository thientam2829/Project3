export const imageUpload = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  formData.append("upload_preset", "xgsafqbz");
  formData.append("cloud_name", "thientam2829");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/thientam2829/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data;
};
