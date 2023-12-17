import { PageSEO } from "@/components/SEO";
import GitHubIcon from "@/components/SocialMediaIcons/GitHubIcon";
import Instagram from "@/components/SocialMediaIcons/Instagram";
import LinkedInIcon from "@/components/SocialMediaIcons/LinkedInIcon";
import TwitterIcon from "@/components/SocialMediaIcons/TwitterIcon";
import Image from "next/image";
import Link from "next/link";

export default function AuthorLayout({ frontMatter, children }) {
  const {
    name,
    avatar,
    company,
    twitter,
    linkedin,
    github,
    instagram,
    description,
  } = frontMatter;

  return (
    <>
      <PageSEO
        title={`About - ${name}`}
        description={`${name}: ${description}`}
      />

      <div className="divide-y mt-2 divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <div className="card">
            <Image
              width={600}
              height={400}
              src={avatar}
              alt={name}
              style={{ width: "100%" }}
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>

            <p className="text-gray-500 dark:text-gray-400">{`${company}`}</p>
            <div className="flex space-x-4 justify-center py-3">
              {twitter && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={twitter}
                  className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  <TwitterIcon />
                </Link>
              )}
              {instagram && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={instagram}
                  className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  <Instagram />
                </Link>
              )}
              {linkedin && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={linkedin}
                  className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  <LinkedInIcon />
                </Link>
              )}
              {github && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={github}
                  className="text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  <GitHubIcon />
                </Link>
              )}
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 pr-8 pl-8 dark:prose-dark lg:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
