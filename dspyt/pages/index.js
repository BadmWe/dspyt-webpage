import Hero from "@/components/Hero";
import Post from "@/components/Post";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";
import GitHubIcon from "@/styles/GitHubIcon";
import Instagram from "@/styles/Instagram";
import LinkedInIcon from "@/styles/LinkedInIcon";
import TwitterIcon from "@/styles/TwitterIcon";
import { StarIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import React, { useState } from "react";

const people = [
  {
    name: "Dmitrii Fedotov",
    role: "Lead Developer",
    imageUrl: "/ava.jpg",
    twitterUrl: "https://twitter.com/DmitriFedotov",
    linkedinUrl: "",
    githubUrl: "https://github.com/BadmWe/",
    InstagramUrl: "",
    authors: ["profile/dmitrii-fedotov"],
  },
  {
    name: "Pavel Fedotov",
    role: "Advisor",
    imageUrl: "/profile.webp",
    twitterUrl: "https://twitter.com/pfedprog",
    linkedinUrl: "https://www.linkedin.com/in/pavel-fedotov-pinsave/",
    githubUrl: "https://github.com/pfed-prog",
    InstagramUrl: "",
    authors: ["profile/pavel-fedotov"],
  },
  {
    name: "Alexander Fedotov",
    role: "Front-End developer",
    imageUrl: "/avasasha.webp",
    twitterUrl: "https://twitter.com/AlexFedotovqq",
    linkedinUrl: "",
    githubUrl: "https://github.com/AlexFedotovqq",
    InstagramUrl: "",
    authors: ["profile/alexfedotovqq"],
  },
];

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
      <div>
        <Hero />

        <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Data Science and Blockchain
        </h2>

        <div className="grid relative mx-auto mt-12 max-w-lg gap-5 lg:ml-5 lg:mr-5 lg:grid-cols-3 lg:max-w-none">
          {posts?.map((post, index) => (
            <Post key={index} post={post} slug={post.slug} />
          ))}
        </div>

        <div className="grid relative mx-auto items-center justify-center ml-4 mr-4">
          <div className="mt-20 text-center sm:max-w-xl">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Join the newsletter!
            </h2>
            <p className="text-center mt-6 text-xl leading-6 text-gray-600 dark:text-gray-300">
              Subscribe to get the latest content by email.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-6 sm:max-w-lg sm:w-full sm:flex"
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

            <div className="mt-4 sm:mt-0 sm:ml-4">
              <button
                type="submit"
                className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
              >
                Notify me
              </button>
            </div>
          </form>

          <div className="mt-6 ml-6 inline-flex items-center divide-x divide-gray-300">
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

        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 mt-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Meet our team
          </h2>
          <ul
            role="list"
            className="mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-56 w-56 rounded-full"
                  src={person.imageUrl}
                  alt={person.name}
                />

                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-100">
                  <a href={person.authors}>{person.name}</a>
                </h3>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {person.role}
                </p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <span className="sr-only">Twitter</span>
                    <a
                      href={person.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-700 dark:text-gray-100 "
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  <li>
                    <span className="sr-only">Instagram</span>
                    <a
                      href={person.InstagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                    >
                      <Instagram />
                    </a>
                  </li>
                  <li>
                    <span className="sr-only">LinkedIn</span>
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li>
                    <span className="sr-only">Github</span>
                    <a
                      href={person.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                    >
                      <GitHubIcon />
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-40"></div>
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
