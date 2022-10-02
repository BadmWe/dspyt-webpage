import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/Tag";
import profile from "@/public/profile.webp";

export default function Post({ post }) {
  return (
    <div
      key={post.frontmatter?.title ?? post.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <Image
          className="w-full object-cover"
          height={300}
          width={550}
          src={post.frontmatter?.cover_image ?? post.cover_image}
          alt={post.frontmatter?.title ?? post.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap">
            {post.frontmatter?.tags?.map((tag) => (
              <Tag key={tag} text={tag} />
            )) ?? post.tags?.map((tag) => <Tag key={tag} text={tag} />)}
          </div>
          <div className="block mt-2">
            <Link href={`/${post.slug}`}>
              <a className="text-xl font-semibold text-gray-900">
                {post.frontmatter?.title ?? post.title}
              </a>
            </Link>
            <p className="mt-3 text-base text-gray-500">
              {post.frontmatter?.excerpt ?? post.excerpt}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">Pavel</span>
            <Image
              src={profile}
              className="h-10 w-10 rounded-full"
              width={40}
              height={40}
              alt="profile picture dspyt"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Pavel</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.frontmatter?.date ?? post.date}>
                {post.frontmatter?.date ?? post.date}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.frontmatter?.time_read ?? post.time_read} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
