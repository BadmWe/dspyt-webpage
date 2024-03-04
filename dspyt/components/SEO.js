import Head from "next/head";
import { useRouter } from "next/router";

import siteMetadata from "@/components/siteMetadata";

const CommonSEO = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  ogImage = siteMetadata.ogImageUrl,
  ogType = siteMetadata.ogType,
}) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={siteMetadata.title} />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  return <CommonSEO title={title} description={description} />;
};

export const BlogSEO = ({ title, description }) => {
  return <CommonSEO title={title} description={description} ogType="article" />;
};

// not used
export const TagSEO = ({ title, description }) => {
  const router = useRouter();
  return (
    <>
      <CommonSEO title={title} description={description} />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  );
};
