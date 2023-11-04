import Image from "@/components/Image";
import { PageSEO } from "@/components/SEO";
import GitHubIcon from "@/styles/GitHubIcon";
import LinkedInIcon from "@/styles/LinkedInIcon";
import TwitterIcon from "@/styles/TwitterIcon";

export default function AuthorLayout({ frontMatter, children }) {
  const {
    name,
    avatar,
    company,
    email,
    twitter,
    linkedin,
    github,
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
            <img src={avatar} alt={name} style={{ width: "100%" }} />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>

            <p className="text-gray-500 dark:text-gray-400">{`${company}`}</p>
            <div className="flex space-x-4 justify-center py-3">
              {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
              )}
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 pr-8 pl-8 dark:prose-dark xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
