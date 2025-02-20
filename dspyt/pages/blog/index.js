import Link from "next/link";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import Post from "@/components/Post";
import { PageSEO } from "@/components/SEO";
import SearchIcon from "@/components/icons/SearchIcon";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";
import { useRouter } from "next/router";

const POSTS_PER_PAGE = 9;

export default function BlogIndexPage({ posts, lastPage }) {
  const router = useRouter();
  const { search } = router.query;

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (router.isReady && search) {
      setSearchValue(search);
    }
  }, [router.isReady]);

  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <PageSEO
        title={`Dspyt Blog - Data Science & Blockchain Insights Hub for Programming Enthusiasts`}
      />
      <div className="relative max-w-7xl mx-auto mt-10">
        <h1 className="dspyt-h3xl" style={{ margin: "20px" }}>
          Data Science and Blockchain Blog
        </h1>
        <div className="items-center justify-center">
          <div className="relative mt-6 ml-20 mr-20 sm:ml-50 sm:mr-50 lg:ml-80 lg:mr-80">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={search ?? "Search articles"}
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <SearchIcon />
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {searchValue &&
            filteredBlogPosts.map((post) => (
              <Post key={post.slug} post={post} slug={post.slug} />
            ))}
          {!searchValue &&
            posts
              .slice(0, POSTS_PER_PAGE)
              .map((post) => (
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
                Showing <span className="font-medium">{1}</span> to{" "}
                <span className="font-medium">{POSTS_PER_PAGE}</span> of{" "}
                <span className="font-medium">{posts.length}</span> results
              </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
              <Link href={`/blog/${lastPage}`}>
                <div className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300">
                  Last Page
                </div>
              </Link>

              <Link href={"/blog/1"}>
                <div className="relative inline-flex items-center ml-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300">
                  Next
                </div>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");

  for (const obj of posts) {
    const name =
      obj.authors && obj.authors.length > 0 ? obj.authors[0] : "dspytdao";

    const authorResults = await getFileBySlug("authors", name);

    obj.authorName = authorResults.frontMatter.name;
    obj.authorAvatar = authorResults.frontMatter.smallAvatar;
    obj.authorSlug = authorResults.frontMatter.slug;
  }

  const lastPage = Math.ceil(posts.length / POSTS_PER_PAGE) - 1;

  return { props: { posts, lastPage } };
}

BlogIndexPage.propTypes = {
  posts: PropTypes.array.isRequired,
  lastPage: PropTypes.number.isRequired,
};
