import Link from "next/link";
import PropTypes from "prop-types";

import ImageDspyt from "@/components/Image";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import SectionContainer from "@/components/SectionContainer";
import { BlogSEO } from "@/components/SEO";
import siteMetadata from "@/components/siteMetadata";
import Tag from "@/components/Tag";

const editUrl = (fileName) => `${siteMetadata.siteRepo}/posts/${fileName}`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/${slug}`
  )}`;

const postDateTemplate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function PostLayout({
  frontMatter,
  authorDetailsList,
  next,
  prev,
  children,
}) {
  const { slug, fileName, date, title, cover_image, tags, excerpt } =
    frontMatter;
  return (
    <SectionContainer>
      <BlogSEO
        title={title}
        description={excerpt}
        image={"https://dspyt.com" + cover_image}
      />
      <ScrollTopAndComment />
      <article>
        <header className="pt-6 xl:pb-6 transition-all">
          <div className="space-y-1 text-center">
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(
                  siteMetadata.locale,
                  postDateTemplate
                )}
              </time>
            </dd>
            <h1 className="dspyt-h3xl pb-5">{title}</h1>
            <ImageDspyt
              className="mx-auto rounded-lg"
              width={460}
              height={220}
              src={cover_image}
              alt={title}
              style={{
                maxHeight: "220px",
              }}
            />
          </div>
        </header>
        <div
          className="xl:grid xl:grid-cols-4 xl:gap-x-6"
          style={{ gridTemplateRows: "auto 1fr" }}
        >
          <dl className="pt-6 pb-10 xl:pt-11">
            <dt className="sr-only">Authors</dt>
            <dd>
              <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                {authorDetailsList.map((author) => (
                  <li className="flex items-center space-x-2" key={author.name}>
                    {author.avatar && (
                      <ImageDspyt
                        src={author.smallAvatar}
                        width="38"
                        height="38"
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                    <dl className="whitespace-nowrap text-l font-medium leading-5">
                      <dt className="sr-only">Name</dt>
                      <Link href={`/profile/${author.slug}`}>
                        <dd className="text-gray-800 dark:text-gray-100 hover:text-cyan-800">
                          {author.name}
                        </dd>
                      </Link>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        {author.twitter && (
                          <Link
                            href={author.twitter}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {author.twitter.replace(
                              "https://twitter.com/",
                              "@"
                            )}
                          </Link>
                        )}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
          <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose prose-zinc prose-strong:text-zinc-800 dark:prose-strong:text-white lg:prose-lg xl:prose-xl max-w-none pb-8 dark:prose-dark">
              {children}
            </div>
            <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
              <Link
                href={discussUrl(slug)}
                rel="nofollow"
                className="hover:text-gray-900"
              >
                Discuss on Twitter
              </Link>
              {` • `}
              <Link href={editUrl(fileName)} className="hover:text-gray-900">
                View on GitHub
              </Link>
            </div>
          </div>
          <footer>
            <div className="text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2">
              <div className="py-4 xl:py-8">
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Tags
                </h2>
                <p className="flex-wrap break-words p-1">
                  {tags?.map((tag) => (
                    <Tag
                      key={tag}
                      text={tag}
                      textRounded="rounded-lg"
                      paddingUpDown="1px"
                      paddingLeftRight="10px"
                    />
                  ))}
                </p>
              </div>
              {(next || prev) && (
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  {prev && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Previous Article
                      </h2>
                      <div className="text-primary-700 dark:text-primary-500 hover:text-primary-500 dark:hover:text-primary-400 mt-1">
                        <Link href={`/${prev.slug}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Next Article
                      </h2>
                      <div className="text-primary-700 dark:text-primary-500 hover:text-primary-500 dark:hover:text-primary-400 mt-1">
                        <Link href={`/${next.slug}`}>{next.title}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="pt-4 xl:pt-8">
              <Link
                href="/blog"
                className="font-mono tracking-tight text-primary-700 dark:text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                &larr; Back to the blog
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  );
}

PostLayout.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  authorDetailsList: PropTypes.array.isRequired,
  prev: PropTypes.object,
  next: PropTypes.object,
  children: PropTypes.node.isRequired,
};
