import PropTypes from "prop-types";

import { MDXLayoutRenderer } from "@/components/MDXComponents";
import PageTitle from "@/components/PageTitle";
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from "@/lib/mdx";

const DEFAULT_LAYOUT = "PostLayout";

export async function getStaticPaths() {
  const posts = getFiles("posts");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter("posts");
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join("/")
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug("posts", params.slug.join("/"));
  const authorList = post.frontMatter.authors || ["dspytdao"];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);
  return { props: { post, authorDetails, prev, next } };
}

export default function BlogPost({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post;
  return (
    <div>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>Under Construction</PageTitle>
        </div>
      )}
    </div>
  );
}

BlogPost.propTypes = {
  post: PropTypes.object,
  authorDetails: PropTypes.object,
  prev: PropTypes.object,
  next: PropTypes.object,
};
