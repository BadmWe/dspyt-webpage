// import { getAllFilesFrontMatter } from "@/lib/mdx";
import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { getFileBySlug } from "@/lib/mdx";
import { getAllProfiles } from "@/lib/profiles";

const DEFAULT_LAYOUT = "AuthorLayoutCard";

export async function getStaticPaths() {
  const profiles = await getAllProfiles();
  return {
    paths: profiles.map((user) => ({
      params: {
        user,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const authorResults = await getFileBySlug("authors", params.user);

  return { props: { profile: authorResults } };
}

export default function Profile({ profile }) {
  const { mdxSource, frontMatter } = profile;

  return (
    <>
      {
        <MDXLayoutRenderer
          layout={DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
      }
    </>
  );
}
