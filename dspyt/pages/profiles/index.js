import PropTypes from "prop-types";

import Post from "@/components/Post";
import { PageSEO } from "@/components/SEO";
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";

const POSTS_PER_PAGE = 9;

export default function ProfilesPage({ posts }) {
  return (
    <div>
      <PageSEO
        title={`Dspyt Profiles Page - Data Science & Blockchain Insights Hub for Programming Enthusiasts`}
      />
      <div className="relative max-w-7xl mx-auto mt-10">
        <h1 className="dspyt-h3xl" style={{ margin: "20px" }}>
          Data Science and Blockchain Profiles
        </h1>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.slice(0, POSTS_PER_PAGE).map((post) => (
            <Post key={post.slug} post={post} slug={"profile/" + post.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("authors");

  for (const obj of posts) {
    const name = obj.slug;
    const authorResults = await getFileBySlug("authors", name);

    obj.cover_image = authorResults.frontMatter.avatar;
    obj.excerpt = authorResults.frontMatter.description;
  }

  return { props: { posts } };
}

ProfilesPage.propTypes = {
  posts: PropTypes.array.isRequired,
  lastPage: PropTypes.number.isRequired,
};
