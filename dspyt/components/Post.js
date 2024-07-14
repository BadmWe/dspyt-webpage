import Image from "next/legacy/image";
import Link from "next/link";
import PropTypes from "prop-types";

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
    authorSlug,
    authorAvatar,
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
        loading="lazy"
      />
      <div className="flex flex-1 bg-white p-6 flex-col justify-between">
        {tags && (
          <p className="flex-wrap break-words">
            {tags.map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
          </p>
        )}

        <div className="block mt-3">
          <Link href={`/${slug}`}>
            <p className="text-xl font-semibold text-gray-900 hover:text-primary-500 dark:hover:text-primary-400">
              {title}
            </p>
          </Link>
          <p className="mt-3 text-base text-gray-500 tracking-wide leading-7">
            {excerpt}
          </p>
        </div>
        {authorName && (
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{authorName}</span>
              <Image
                src={authorAvatar}
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
                loading="lazy"
                alt={`dspyt.com profile picture ${authorName}`}
              />
            </div>
            <div className="ml-3">
              <Link href={`/profile/${authorSlug}`}>
                <p className="text-sm font-medium text-gray-900 hover:text-green-700">
                  {authorName}
                </p>
              </Link>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={date}>{formatDate(date)}</time>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};
