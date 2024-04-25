import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
      <div className="grid relative mx-auto items-center justify-center ml-4 mr-4">
        <div className="text-center sm:max-w-xl">
          <h1 className="dspyt-h2 mt-6">Create Markdown Dspyt</h1>
          <p className="mt-2 sm:mt-6 text-sm sm:text-lg lg:text-xl leading-7 text-gray-600 dark:text-gray-300">
            It is important to follow all the rules for writing an article. All
            information is available{" "}
            <a href="https://dspyt.com/faq" className="text-indigo-600">
              here
            </a>
          </p>
        </div>
      </div>

      <label className="inline-flex mb-3 ml-8 rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold text-white cursor-pointer shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 ease-in-out">
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
        height="100%"
        maxHeight={2000}
        minHeight={500}
        highlightEnable={false}
        visibleDragbar={false}
        onChange={setMarkdown}
        onDrop={async (event) => {
          event.preventDefault();
          await onImagePasted(event.dataTransfer, setMarkdown);
        }}
        style={{
          minHeight: "500px",
          marginLeft: 6,
          marginRight: 6,
        }}
      />
      <button
        className="flex items-center justify-center mx-auto mt-3 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 ease-in-out"
        onClick={() => exportUserInfo(markdown)}
      >
        Create markdown
      </button>
    </div>
  );
}
export default HomePage;
