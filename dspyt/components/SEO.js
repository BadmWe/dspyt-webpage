import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import siteMetadata from "@/components/siteMetadata";

const CommonSEO = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  ogImage = siteMetadata.ogImageUrl,
  twitterImage = siteMetadata.twitter,
  ogType = siteMetadata.ogType,
}) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="canonical"
        href={`${siteMetadata.siteUrl}${router.asPath}`}
        key="canonical"
      />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dspyt" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content={twitterImage} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  );
};

CommonSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
};

export const PageSEO = ({ title, description }) => {
  return <CommonSEO title={title} description={description} />;
};

PageSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export const BlogSEO = ({ title, description, image }) => {
  return (
    <CommonSEO
      title={title}
      description={description}
      ogImage={image}
      twitterImage={image}
      ogType="article"
    />
  );
};

BlogSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
