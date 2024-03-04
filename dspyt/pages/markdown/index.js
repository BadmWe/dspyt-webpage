import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Head from "next/head";

import onImagePasted from "@/components/markdown/onImagePasted";
import { PageSEO } from "@/components/SEO";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function HomePage() {
  const [markdown, setMarkdown] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("markdown") ||
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
    }
    return "";
  });

  useEffect(() => {
    // Save markdown content to local storage
    if (typeof window !== "undefined") {
      localStorage.setItem("markdown", markdown);
    }
  }, [markdown]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedTypes = ["image/png", "image/webp", "image/jpeg"];
      if (allowedTypes.includes(file.type)) {
        const imagePath = `images/${file.name}`;
        const updatedMarkdown = markdown.replace(
          'cover_image: ""',
          `cover_image: "${imagePath}"`
        );
        setMarkdown(updatedMarkdown);
      } else {
        alert("Invalid file type. Please select a PNG, WebP, or JPEG image.");
      }
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
      <PageSEO title={"Dspyt: Markdown"} />
      <h1 className="dspyt-h2 mt-6">Create Markdown Dspyt</h1>
      <label className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold text-white cursor-pointer shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 ease-in-out">
        Select a preview image
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <MDEditor
        value={markdown}
        preview="edit"
        maxHeight={2000}
        minHeight={700}
        highlightEnable={false}
        onChange={setMarkdown}
        onDrop={async (event) => {
          await onImagePasted(event.dataTransfer, setMarkdown);
          event.preventDefault();
        }}
        style={{
          minHeight: "500px",
        }}
      />
      <button
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 ease-in-out"
        onClick={() => exportUserInfo(markdown)}
      >
        Create markdown
      </button>
    </div>
  );
}
export default HomePage;
