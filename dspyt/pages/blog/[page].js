import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";

import SearchIcon from "@/components/icons/SearchIcon";
import Post from "@/components/Post";
import { PageSEO } from "@/components/SEO";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";

const POSTS_PER_PAGE = 9;

export default function BlogPage({ posts, pageNumber }) {
  const startPostNumber = pageNumber * POSTS_PER_PAGE;
  const endPostNumber = startPostNumber + POSTS_PER_PAGE;

  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <PageSEO title={"Dspyt: Blog Page"} />
      <div className="relative max-w-7xl mx-auto mt-10">
        <h1
          className="dspyt-h3xl"
          style={{ margin: "20px" }}
        >
          Data Science and Blockchain Blog
        </h1>

        <div className="items-center justify-center">
          <div className="relative mt-6 ml-20 mr-20 sm:ml-50 sm:mr-50 lg:ml-80 lg:mr-80">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <SearchIcon />
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {!searchValue &&
            posts
              .slice(startPostNumber, endPostNumber)
              .map((post) => (
                <Post key={post.slug} post={post} slug={post.slug} />
              ))}
          {searchValue &&
            filteredBlogPosts.map((post) => (
              <Post key={post.slug} post={post} slug={post.slug} />
            ))}
        </div>
        {!searchValue && (
          <nav
            className="px-4 py-3 flex items-center justify-between sm:px-6"
            aria-label="Pagination"
          >
            <div className="hidden sm:block">
              <p className="text-sm text-gray-700 dark:text-white">
                Showing{" "}
                <span className="font-medium">{1 + startPostNumber}</span> to{" "}
                <span className="font-medium">
                  {endPostNumber > posts.length ? posts.length : endPostNumber}
                </span>{" "}
                of <span className="font-medium">{posts.length}</span> results
              </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
              {pageNumber >= 2 && (
                <Link href={`/blog/${pageNumber - 1}`}>
                  <div className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </div>
                </Link>
              )}

              {pageNumber === 1 && (
                <Link href={`/blog/`}>
                  <div className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300">
                    Previous
                  </div>
                </Link>
              )}

              {endPostNumber < posts.length && (
                <Link href={`/blog/${pageNumber + 1}`}>
                  <div className="relative inline-flex items-center ml-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300">
                    Next
                  </div>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter("posts");
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE) - 1;
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context;
  const posts = await getAllFilesFrontMatter("posts");
  const pageNumber = parseInt(page);

  for (const post of posts) {
    const name = post.authors?.length > 0 ? post.authors[0] : "dspytdao";

    const authorResults = await getFileBySlug("authors", name);

    post.authorName = authorResults.frontMatter.name;
    post.authorAvatar = authorResults.frontMatter.avatar;
    post.authorSlug = authorResults.frontMatter.slug;
  }

  return {
    props: {
      posts,
      pageNumber,
    },
  };
}

BlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
  pageNumber: PropTypes.number.isRequired,
};
