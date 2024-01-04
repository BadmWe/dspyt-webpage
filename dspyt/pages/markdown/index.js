import dynamic from "next/dynamic";
import { useState } from "react";

import onImagePasted from "@/components/markdown/onImagePasted";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

function HomePage() {
const [markdown, setMarkdown] = useState(
 `---
  title: ""
  date: ""
  excerpt: ""
  cover_image: ""
  authors: [""]
  tags:
    [
      "",
      "",
    ]
---`
    ); 

    // const [markdown, setMarkdown] = useState("")

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imagePath = `images/${file.name}`;
      const updatedMarkdown = markdown.replace('cover_image: ""', `cover_image: "${imagePath}"`);
      setMarkdown(updatedMarkdown);
    }
  };
  function exportUserInfo(userInfo) {
    const markdownData = userInfo;
    const blob = new Blob([markdownData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.md";
    link.href = url;
    link.click();
  }

  return (
    <div>
    <input  style={{
    padding: '5px 10px',
    backgroundColor: '#291BA8',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '15px',
  }} type="file" accept="image/*" onChange={handleFileChange} />
<MDEditor
        value={markdown}
        preview="edit"
        maxHeight={2000}
        minHeight={600}
        highlightEnable={false}

        onChange={
          setMarkdown
        }
        
        onDrop={async (event) => {
          await onImagePasted(event.dataTransfer, setMarkdown);
          event.preventDefault();
        }
      }

      style={{
        minHeight : "500px"
      }}
      />
<button
  style={{
    padding: '9px 18px',
    backgroundColor: '#291BA8',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '15px',
  }}
  onClick={() => exportUserInfo(markdown)}
>
  Create markdown
</button>
    </div>
  );
};
export default HomePage;