const fileUploader = (file) => {
  const imageURL = URL.createObjectURL(file);
  return imageURL;
};

export default fileUploader;
