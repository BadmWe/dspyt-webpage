import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";

import GitHubIcon from "@/components/SocialMediaIcons/GitHubIcon";
import InstagramIcon from "@/components/SocialMediaIcons/InstagramIcon";
import LinkedInIcon from "@/components/SocialMediaIcons/LinkedInIcon";
import TwitterIcon from "@/components/SocialMediaIcons/TwitterIcon";
import Hero from "@/components/Hero";
import Post from "@/components/Post";
import { PageSEO } from "@/components/SEO";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";

const people = [
  {
    name: "Dmitrii Fedotov",
    role: "Lead Developer",
    imageUrl: "/authors/ava-dmitrii.webp",
    twitterUrl: "https://twitter.com/DmitriFedotov",
    linkedinUrl: "https://www.linkedin.com/in/dmitrii-fedotov/",
    githubUrl: "https://github.com/BadmWe/",
    InstagramUrl: "https://www.instagram.com/dmitry.fov/",
    authors: "/profile/dmitrii-fedotov",
  },
  {
    name: "Pavel Fedotov",
    role: "Advisor",
    imageUrl: "/authors/pavel-ava.webp",
    twitterUrl: "https://twitter.com/pfedprog",
    linkedinUrl: "https://www.linkedin.com/in/pavel-fedotov-pinsave/",
    githubUrl: "https://github.com/pfed-prog",
    authors: "/profile/pavel-fedotov",
  },
  {
    name: "Alexander Fedotov",
    role: "Front-End Developer",
    imageUrl: "/authors/ava-sasha.webp",
    twitterUrl: "https://twitter.com/AlexFedotovqq",
    githubUrl: "https://github.com/AlexFedotovqq",
    authors: "/profile/alexfedotovqq",
  },
];

export default function HomePage({ posts }) {
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
    <div>
      <PageSEO />
      <Hero />
      <h2 className="dspyt-h3xl">Data Science and Blockchain</h2>
      <div className="grid relative mx-auto mt-12 max-w-lg gap-5 lg:ml-5 lg:mr-5 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post) => (
          <Post key={post.slug} post={post} slug={post.slug} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 mt-20">
        <h2 className="dspyt-h3xl">Meet our team</h2>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto h-56 w-56 rounded-full"
                width={400}
                height={400}
                src={person.imageUrl}
                alt={person.name}
                loading="lazy"
              />

              <h3 className="mt-6 text-base font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-600">
                <Link href={person.authors}>{person.name}</Link>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {person.role}
              </p>
              <ul className="mt-6 flex justify-center gap-x-6">
                {person.twitterUrl && (
                  <li>
                    <span className="sr-only">Twitter</span>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={person.twitterUrl}
                      className="text-gray-800 hover:text-gray-600 dark:text-gray-100"
                      passHref
                    >
                      <TwitterIcon />
                    </Link>
                  </li>
                )}
                {person.githubUrl && (
                  <li>
                    <span className="sr-only">Github</span>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={person.githubUrl}
                      className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                      passHref
                    >
                      <GitHubIcon />
                    </Link>
                  </li>
                )}
                {person.InstagramUrl && (
                  <li>
                    <span className="sr-only">Instagram</span>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={person.InstagramUrl}
                      className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                    >
                      <InstagramIcon />
                    </Link>
                  </li>
                )}
                {person.linkedinUrl && (
                  <li>
                    <span className="sr-only">LinkedIn</span>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={person.linkedinUrl}
                      className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                      passHref
                    >
                      <LinkedInIcon />
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid relative mx-auto items-center justify-center ml-4 mr-4 mt-10">
        <div className="mt-20 text-center sm:max-w-xl">
          <h2 className="dspyt-h3xl">Join the newsletter!</h2>
          <p className="text-center mt-10 text-2xl leading-6 text-gray-600 dark:text-gray-300">
            Subscribe to get the latest content by email.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 sm:max-w-2xl sm:w-full sm:flex"
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
            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1 pl-5 py-1 text-sm sm:py-3 dark:text-gray-300">
            <span className="font-medium text-gray-900 dark:text-gray-100 mr-1">
              Rated 5 stars
            </span>
            by over
            <span className="ml-1 font-medium text-indigo-600 dark:text-gray-100">
              300 beta users
            </span>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
}

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter("posts");

  posts = posts.slice(0, 6);

  for (const post of posts) {
    const name =
      post.authors && post.authors.length > 0 ? post.authors[0] : "dspytdao";

    const authorResults = await getFileBySlug("authors", name);

    post.authorName = authorResults.frontMatter.name;
    post.authorAvatar = authorResults.frontMatter.smallAvatar;
    post.authorSlug = authorResults.frontMatter.slug;
  }

  return { props: { posts } };
}

HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
};
