import fs from "fs";
import path from "path";
import { useState } from "react";
import matter from "gray-matter";
import Post from "../components/Post";
import Hero from "../components/Hero";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  const [cnt, setCnt] = useState(0);

  return (
    <div className="relative  ">
      <Hero />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.slice(cnt, cnt + 5).map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <nav
          className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{cnt + 1}</span> to{" "}
              <span className="font-medium">{cnt + 5}</span> of{" "}
              <span className="font-medium">{posts.length}</span> results
            </p>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end">
            <a
              onClick={() => (cnt > 5 ? setCnt(cnt - 5) : setCnt(0))}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              onClick={() =>
                cnt + 5 > posts.length ? setCnt(cnt) : setCnt(cnt + 5)
              }
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  //console.log(posts.sort(sortByDate));
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
