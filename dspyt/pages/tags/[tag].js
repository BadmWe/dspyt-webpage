import PropTypes from "prop-types";
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

  for (const obj of filteredPosts) {
    const name = obj.authors?.length > 0 ? obj.authors[0] : "dspytdao";

    const authorResults = await getFileBySlug("authors", name);

    obj.authorName = authorResults.frontMatter.name;
    obj.authorAvatar = authorResults.frontMatter.smallAvatar;
    obj.authorSlug = authorResults.frontMatter.slug;
  }

  return { props: { posts: filteredPosts, tag: params.tag } };
}

export default function Tag({ posts, tag }) {
  const [page, setPage] = useState(1);

  const lastPost = 9 * page;

  const title = tag.charAt(0).toUpperCase() + tag.split("-").join(" ").slice(1);
  return (
    <div>
      <BlogSEO
        title={`${title} - Blockchain Insights Hub for Programming Enthusiasts`}
        description={`Dspyt ${title}: Data Science & Blockchain Insights Hub for Programming Enthusiasts`}
        image={"https://dspyt.com/DSPYT.png"}
      />
      <div className="relative max-w-7xl mx-auto mt-10">
        <h1 className="dspyt-h3xl" style={{ margin: "20px" }}>
          Dspyt: <span> {title} </span>
        </h1>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.slice(0, lastPost).map((post) => (
            <Post key={post.slug} post={post} slug={post.slug} />
          ))}
        </div>
        {posts.length > lastPost && (
          <div
            onClick={() => setPage(page + 1)}
            onKeyDown={() => setPage(page + 1)}
            className="relative inline-flex items-center mt-4 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300 cursor-pointer"
          >
            Load More Posts
          </div>
        )}
      </div>
    </div>
  );
}

Tag.propTypes = {
  posts: PropTypes.array.isRequired,
  tag: PropTypes.string.isRequired,
};
