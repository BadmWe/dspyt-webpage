import PropTypes from "prop-types";
import { useState } from "react";

import Link from "@/components/Link";
import Pagination from "@/components/Pagination";
import Tag from "@/components/Tag";
import SearchIcon from "@/components/icons/SearchIcon";
import formatDate from "@/lib/utils/formatDate";

export default function ListLayout({
  title,
  posts,
  pagination,
  initialDisplayPosts = [],
}) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts;

  return (
    <div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <SearchIcon />
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && "No posts found."}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {pagination?.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </div>
  );
}

ListLayout.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  initialDisplayPosts: PropTypes.array.isRequired,
};
