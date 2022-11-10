import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";

import Post from "@/components/Post";
import { sortByDate } from "@/utils/sort";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Data Science with Python | DSPYT</title>
        <link rel="icon" href="big-data-svgrepo.svg" />
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
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Dspyt blog
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Data Science and Blockchain Based Projects
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.slice(0, 6).map((post, index) => (
              <Post key={index} post={post.frontmatter} slug={post.slug} />
            ))}
          </div>
          <nav
            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
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
              <Link href={"/blog/4"} legacyBehavior>
                <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Last
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
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

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
