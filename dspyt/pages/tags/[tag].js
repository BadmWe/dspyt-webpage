import { useState } from "react";

import Post from "@/components/Post";
import { BlogSEO } from "@/components/SEO";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";
import { getAllTags } from "@/lib/tags";
import { convertToSlug } from "@/lib/utils/convertToSlug";

export async function getStaticPaths() {
  const tags = await getAllTags();

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter("posts");
  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((tag) => convertToSlug(tag)).includes(params.tag)
  );

  for (let i = 0; i < filteredPosts.length; i++) {
    const obj = filteredPosts[i];
    const name = obj.authors?.length > 0 ? obj.authors[0] : "dspytdao";

    const authorResults = await getFileBySlug("authors", name);

    filteredPosts[i].authorName = authorResults.frontMatter.name;
    filteredPosts[i].authorAvatar = authorResults.frontMatter.avatar;
    filteredPosts[i].authorSlug = authorResults.frontMatter.slug;
  }

  return { props: { posts: filteredPosts, tag: params.tag } };
}

export default function Tag({ posts, tag }) {
  const [page, setPage] = useState(1);

  const lastPost = 9 * page;

  const title = tag.charAt(0).toUpperCase() + tag.split("-").join(" ").slice(1);
  return (
    <div>
      <BlogSEO title={`Data Science with Python ${title}`} />
      <div className="relative max-w-7xl mx-auto mt-10">
        <h1
          className="dspyt-h1"
          style={{ margin: "20px", textAlign: "center" }}
        >
          Dspyt blog tag: <span> {title} </span>
        </h1>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.slice(0, lastPost).map((post, index) => (
            <Post key={index} post={post} slug={post.slug} />
          ))}
        </div>
        {posts.length > lastPost ? (
          <div
            onClick={() => setPage(page + 1)}
            className="relative inline-flex items-center mt-4 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300"
          >
            Load More Posts
          </div>
        ) : null}
      </div>
    </div>
  );
}
