import fileUpload from "./fileUploader";
import insertToTextArea from "./insertToTextArea";

const onImagePasted = async (dataTransfer, setMarkdown) => {
  console.log(dataTransfer);
  const files = [];
  for (let index = 0; index < dataTransfer.items.length; index += 1) {
    const file = dataTransfer.files.item(index);

    if (file) {
      files.push(file);
    }
  }

  await Promise.all(
    files.map(async (file) => {
      const url = fileUpload(file);
      console.log(url);
      const insertedMarkdown = insertToTextArea(`![](${url})`);
      if (!insertedMarkdown) {
        return;
      }
      setMarkdown(insertedMarkdown);
    })
  );
};

export default onImagePasted;
