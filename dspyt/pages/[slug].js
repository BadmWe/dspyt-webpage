import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export const config = {
  unstable_runtimeJS: false,
};

export default function PostPage({
  frontmatter: { title, excerpt, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/big-data-svgrepo.svg" />
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={"https://dspyt.com/" + cover_image}
        />
        <meta property="og:url" content={"https://dspyt.com/" + slug} />
      </Head>

      <div className="relative px-4 sm:px-6 lg:px-8 mt-10">
        <div className="card card-page text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </span>
          </h1>

          <img
            className="mx-auto rounded-lg"
            quality={25}
            width={656}
            height={324}
            src={cover_image}
            alt={title}
          />

          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </>
  );
}

// Add Recent/Popular posts section

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
