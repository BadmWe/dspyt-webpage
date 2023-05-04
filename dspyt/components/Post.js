import Image from "next/legacy/image";
import Link from "next/link";

import Tag from "@/components/Tag";
import formatDate from "@/lib/utils/formatDate";

export default function Post({ post, slug }) {
  const {
    title,
    date,
    excerpt,
    cover_image,
    tags,
    authorName,
    authorAvatar,
    authorSlug,
  } = post;

  return (
    <div
      key={title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <Image
        className="w-full object-cover"
        height={300}
        width={600}
        src={cover_image}
        alt={title}
      />
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap">
            {tags?.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <div className="block mt-2">
            <Link href={`/${slug}`} legacyBehavior>
              <a className="text-xl font-semibold text-gray-900">{title}</a>
            </Link>
            <p className="mt-3 text-base text-gray-500">{excerpt}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only"> {authorName}</span>
            <Image
              src={authorAvatar}
              className="h-10 w-10 rounded-full"
              width={40}
              height={40}
              alt={`dspyt.com profile picture ${authorName}`}
            />
          </div>
          <div className="ml-3">
            <Link href={`/profile/${authorSlug}`}>
              <p className="text-sm font-medium text-gray-900">{authorName}</p>
            </Link>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={date}>{formatDate(date)}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
