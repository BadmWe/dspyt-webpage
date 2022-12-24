import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { getAllFilesFrontMatter } from "@/lib/mdx";
import Post from "@/components/Post";

const POSTS_PER_PAGE = 6;

export default function Home({ posts, pagination }) {
  const number = pagination.currentPage;
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
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.slice(number * 6, number * 6 + 6).map((post, index) => (
              <Post key={index} post={post} slug={post.slug} />
            ))}
          </div>
          <nav
            className="px-4 py-3 flex items-center justify-between sm:px-6"
            aria-label="Pagination"
          >
            <div className="hidden sm:block">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{1 + 6 * number}</span> to{" "}
                <span className="font-medium">
                  {6 * number + 6 > posts.length
                    ? posts.length
                    : 6 + 6 * number}
                </span>{" "}
                of <span className="font-medium">{posts.length}</span> results
              </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
              {number < 2 ? (
                ""
              ) : (
                <Link href={`/blog/${number - 1}`} legacyBehavior>
                  <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </a>
                </Link>
              )}

              {number === 1 ? (
                <Link href={`/blog/`} legacyBehavior>
                  <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </a>
                </Link>
              ) : null}

              {6 * number + 6 >= posts.length ? null : (
                <Link href={`/blog/${number + 1}`} legacyBehavior>
                  <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </a>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

// implement for loop
export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter("posts");
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE);
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

  return {
    props: {
      posts,
      pagination,
    },
  };
}
