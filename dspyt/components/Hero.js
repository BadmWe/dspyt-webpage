import { ChevronRightIcon, StarIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Image from "next/image";

import HeroImage from "@/public/pinsave.webp";

export default function Hero() {
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
    <div className="pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <a
                href="https://evm.pinsave.app/"
                className="inline-flex space-x-4"
              >
                <span className="rounded bg-indigo-50 dark:bg-indigo-200 px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-700 tracking-wide uppercase">
                  What is new
                </span>
                <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-500 space-x-1">
                  <span>Just Added Livepeer</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
                Pin Save: Decentralized Pinterest
              </h1>
              <p className="mt-6 text-xl text-gray-500 dark:text-gray-300">
                Share Your Ideas as NFTs on Decentralized Storage
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-12 sm:max-w-lg sm:w-full sm:flex"
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
                  <span className="font-medium text-indigo-600">
                    500 beta users
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <Image
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src={HeroImage}
                alt="PinSave - Decentralized Pinterest"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
