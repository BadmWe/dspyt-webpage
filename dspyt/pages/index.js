import Hero from "@/components/Hero";
import Post from "@/components/Post";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";
import { StarIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import React, { useState } from "react";

export default function Home({ posts }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });
    alert("Email was submitted: " + email);
  };
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
        </div>
        <div className=" grid relative mx-auto items-center justify-center">
          <div className="mt-4 text-center sm:max-w-xl">
            <h1 className="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100 sm:text-6xl">
              Join the newsletter!
            </h1>
            <p className="text-center mt-2 text-2x1 leading-6 text-gray-600 dark:text-gray-300">
              Subscribe to get the latest content by email.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-4 sm:max-w-lg sm:w-full sm:flex"
          >
            <div className="min-w-0 flex-1">
              <label htmlFor="hero-email" className="sr-only">
                Email address
              </label>
              <input
                id="hero-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
              >
                Notify me
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="inline-flex items-center divide-x divide-gray-300">
              <div className="flex-shrink-0 flex pr-5">
                <StarIcon
                  className="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
              <div className="min-w-0 flex-1 pl-5 py-1 text-sm sm:py-3 dark:text-gray-300">
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  Rated 5 stars
                </span>{" "}
                by over{" "}
                <span className="font-medium text-indigo-600 dark:text-gray-100">
                  250 beta users
                </span>
              </div>
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
