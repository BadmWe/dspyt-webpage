import { getAllFilesFrontMatter } from "@/utils/mdx";
import { getAllTags } from "@/utils/tags";
import Post from "@/components/Post";

export async function getStaticPaths() {
  const tags = await getAllTags();
  //console.log(tags);
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter();
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.map((t) => t.includes(params.tag))
  );

  return { props: { posts: filteredPosts, tag: params.tag } };
}

export default function Tag({ posts, tag }) {
  //console.log(posts);
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  return (
    <div className="relative max-w-7xl mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Dspyt blog tag:
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {title}
        </p>
      </div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {posts.slice(0, 6).map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
