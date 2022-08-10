import Image from "next/image";
import profile from "../public/profile.jpeg";

export default function Post({ post }) {
  return (
    <div
      key={post.frontmatter.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={"/" /*post.category.href*/} className="hover:underline">
              {/*post.category.name*/}
            </a>
          </p>
          <a href={`/${post.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {post.frontmatter.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {post.frontmatter.excerpt}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a className={"" /*href=post.frontmatter.author*/}>
              <span className="sr-only">Pavel</span>
              <Image
                className="h-10 w-10 rounded-full"
                src={profile}
                alt="profile image"
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a className={"hover:underline" /* href=post.author.href */}>
                Pavel
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.frontmatter.time_read} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
