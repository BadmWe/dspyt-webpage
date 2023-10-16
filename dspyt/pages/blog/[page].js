import Post from "@/components/Post";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const POSTS_PER_PAGE = 6;

export default function Home({ posts, pagination }) {
  const number = pagination.currentPage;
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
        <meta property="og:url" content={`https://dspyt.com/blog/${number}`} />
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
          <div className="items-center justify-center">
            <div className="relative mt-6 ml-20 mr-20 sm:ml-50 sm:mr-50 lg:ml-80 lg:mr-80">
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
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {!searchValue &&
              posts
                .slice(number * 6, number * 6 + 6)
                .map((post, index) => (
                  <Post key={index} post={post} slug={post.slug} />
                ))}
            {searchValue &&
              filteredBlogPosts
                .slice(0, 26)
                .map((post, index) => (
                  <Post key={index} post={post} slug={post.slug} />
                ))}
          </div>
          {!searchValue && (
            <nav
              className="px-4 py-3 flex items-center justify-between sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700 dark:text-white">
                  Showing <span className="font-medium">{1 + 6 * number}</span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {6 * number + 6 > posts.length
                      ? posts.length
                      : 6 + 6 * number}
                  </span>{" "}
                  of <span className="font-medium">{posts.length}</span> results
                </p>
              </div>
              <div className="flex-1 flex justify-between sm:justify-end">
                {number < 2 ? null : (
                  <Link href={`/blog/${number - 1}`} legacyBehavior>
                    <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Previous
                    </a>
                  </Link>
                )}

                {number === 1 ? (
                  <Link href={`/blog/`} legacyBehavior>
                    <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300">
                      Previous
                    </a>
                  </Link>
                ) : null}

                {6 * number + 6 >= posts.length ? null : (
                  <Link href={`/blog/${number + 1}`} legacyBehavior>
                    <a className="relative inline-flex items-center ml-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300">
                      Next
                    </a>
                  </Link>
                )}
              </div>
            </nav>
          )}
        </div>
      </div>
    </>
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

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  for (let i = 0; i < posts.length; i++) {
    const obj = posts[i];
    const name =
      obj.authors && obj.authors.length > 0 ? obj.authors[0] : "pavel-fedotov";

    const authorResults = await getFileBySlug("authors", name);

    posts[i].authorName = authorResults.frontMatter.name;
    posts[i].authorAvatar = authorResults.frontMatter.avatar;
    posts[i].authorSlug = authorResults.frontMatter.slug;
  }

  return {
    props: {
      posts,
      pagination,
    },
  };
}
