import Head from "next/head";

import { getAllFilesFrontMatter } from "@/lib/mdx";
import Post from "@/components/Post";
import Hero from "@/components/Hero";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>DSPYT: Data Science with Python</title>
        <meta
          name="description"
          content="Data Science with Python and blockchain DAO. We cover econometrics, python programming, blockchain technology and many more topics."
        />
        <meta property="og:image" content="https://dspyt.com/DSPYT.png" />
        <meta property="og:url" content="https://dspyt.com/" />
        <meta property="og:title" content="DSPYT: Data Science with Python" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dspytdao" />
        <meta name="twitter:creator" content="@pfedprog" />
      </Head>
      <div className="relative">
        <Hero />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Data Science and Blockchain
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.slice(0, 6).map((post, index) => (
              <Post key={index} post={post} slug={post.slug} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");
  return { props: { posts } };
}
