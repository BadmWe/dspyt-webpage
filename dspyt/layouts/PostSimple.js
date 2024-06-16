import PropTypes from "prop-types";

import Link from "@/components/Link";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import SectionContainer from "@/components/SectionContainer";
import { BlogSEO } from "@/components/SEO";
import formatDate from "@/lib/utils/formatDate";

export default function PostLayout({ frontMatter, next, prev, children }) {
  const { date, title, excerpt } = frontMatter;

  return (
    <SectionContainer>
      <BlogSEO title={title} description={excerpt} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 pb-10 text-center">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div className="dspyt-h3xl">{title}</div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                {children}
              </div>
            </div>
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}

PostLayout.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  prev: PropTypes.object,
  next: PropTypes.object,
  children: PropTypes.node.isRequired,
};
