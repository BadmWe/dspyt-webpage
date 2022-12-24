import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { getAllFilesFrontMatter } from "@/lib/mdx";
import Post from "@/components/Post";

export default function Home({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Data Science with Python | DSPYT</title>
        <meta
          name="description"
          content="Data Science with Python and blockchain DAO. We cover econometrics, python programming, blockchain technology and many more topics."
        />
        <meta property="og:image" content="https://dspyt.com/DSPYT.png" />
        <meta property="og:url" content="https://dspyt.com/blog" />
        <meta property="og:title" content="Data Science with Python | DSPYT" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dspytdao" />
        <meta name="twitter:creator" content="@pfedprog" />
      </Head>
      <div className="relative">
        <div className="relative max-w-7xl mx-auto mt-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
              Data Science and Blockchain DSPYT Blog
            </h1>
          </div>
          <div className="relative max-w-lg mt-6">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {searchValue &&
              filteredBlogPosts
                .slice(0, 26)
                .map((post, index) => (
                  <Post key={index} post={post} slug={post.slug} />
                ))}
            {!searchValue &&
              posts
                .slice(0, 6)
                .map((post, index) => (
                  <Post key={index} post={post} slug={post.slug} />
                ))}
          </div>
          {!searchValue && (
            <nav
              className="px-4 py-3 flex items-center justify-between border-t sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{1}</span> to{" "}
                  <span className="font-medium">{6}</span> of{" "}
                  <span className="font-medium">{posts.length}</span> results
                </p>
              </div>
              <div className="flex-1 flex justify-between sm:justify-end">
                <Link href={"/blog/1"} legacyBehavior>
                  <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </a>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");
  return { props: { posts } };
}
