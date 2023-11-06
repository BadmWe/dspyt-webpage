import Hero from "@/components/Hero";
import Post from "@/components/Post";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";

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
            {posts?.map((post, index) => (
              <Post key={index} post={post} slug={post.slug} />
            ))}
          </div>
          <div className="grid place-items-end">
            <div className="pt-4 lg:pt-8 mr-8 p sm:mr-20 border-gray-900">
              <Link href="/faq" legacyBehavior>
                <a className="relative px-4 py-2 mr-5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300">
                  Share your content here
                </a>
              </Link>
              <Link href="/blog" legacyBehavior>
                <a className="relative px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300">
                  Go to the blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter("posts");

  posts = posts.slice(0, 6);

  for (let i = 0; i < posts.length; i++) {
    const obj = posts[i];
    const name =
      obj.authors && obj.authors.length > 0 ? obj.authors[0] : "dspytdao";

    const authorResults = await getFileBySlug("authors", name);

    posts[i].authorName = authorResults.frontMatter.name;
    posts[i].authorAvatar = authorResults.frontMatter.avatar;
    posts[i].authorSlug = authorResults.frontMatter.slug;
  }

  return { props: { posts } };
}
