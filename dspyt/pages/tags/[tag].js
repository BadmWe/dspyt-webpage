import Head from "next/head";

import { getAllFilesFrontMatter } from "@/utils/mdx";
import { getAllTags } from "@/utils/tags";
import Post from "@/components/Post";

export async function getStaticPaths() {
  const tags = await getAllTags();
  //console.log(tags);
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
  const allPosts = await getAllFilesFrontMatter();
  //console.log(123, allPosts);
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.includes(params.tag)
  );
  //console.log(231, filteredPosts);
  //console.log(params.tag);
  return { props: { posts: filteredPosts, tag: params.tag } };
}

export default function Tag({ posts, tag }) {
  //console.log(tag);
  //console.log(posts);
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  return (
    <>
      <Head>
        <title>Data Science with Python Tags | DSPYT</title>
        <link rel="icon" href="big-data-svgrepo.svg" />
        <meta
          name="description"
          content="Data Science with Python and blockchain DAO. We cover econometrics, python programming, blockchain technology and many more topics."
        />
        <meta property="og:image" content="https://dspyt.com/DSPYT.png" />
        <meta property="og:url" content={`https://dspyt.com/tags/${title}`} />
        <meta
          property="og:title"
          content={`Data Science with Python ${title} | DSPYT`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dspytdao" />
        <meta name="twitter:creator" content="@pfedprog" />
      </Head>
      <div className="relative max-w-7xl mx-auto mt-10">
        <div className="text-center">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl">
            Dspyt blog tag: {title}
          </h1>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.slice(0, 26).map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
