import ImageDspyt from "@/components/Image";
import PageTitle from "@/components/PageTitle";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import SectionContainer from "@/components/SectionContainer";
import { BlogSEO } from "@/components/SEO";
import siteMetadata from "@/components/siteMetadata";
import Tag from "@/components/Tag";
import Link from "next/link";

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
  authorDetails,
  next,
  prev,
  children,
}) {
  const { slug, fileName, date, title, cover_image, tags, excerpt } =
    frontMatter;
  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/${slug}`}
        authorDetails={authorDetails}
        summary={excerpt}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <header className="pt-6 xl:pb-6">
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
            <PageTitle>{title}</PageTitle>
            <ImageDspyt
              className="mx-auto rounded-lg"
              width={460}
              height={220}
              src={cover_image}
              alt={title}
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
                {authorDetails?.map((author) => (
                  <li className="flex items-center space-x-2" key={author.name}>
                    {author.avatar && (
                      <ImageDspyt
                        src={author.avatar}
                        width="38"
                        height="38"
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                    <dl className="whitespace-nowrap text-l font-medium leading-5">
                      <dt className="sr-only">Name</dt>
                      <Link href={`/profile/${author.slug}`}>
                        <dd className="text-gray-900 dark:text-gray-100">
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
            <div className="prose max-w-none pb-8 dark:prose-dark">
              {children}
            </div>
            <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
              <Link href={discussUrl(slug)} rel="nofollow">
                {"Discuss on Twitter"}
              </Link>
              {` • `}
              <Link href={editUrl(fileName)}>{"View on GitHub"}</Link>
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
                      paddingPx={"0.8px"}
                      textRounded="rounded-sm"
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
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${prev.slug}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Next Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
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
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
