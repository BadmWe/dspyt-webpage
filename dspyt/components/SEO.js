import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

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

PageSEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const BlogSEO = ({ title, description }) => {
  return <CommonSEO title={title} description={description} ogType="article" />;
};

BlogSEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
