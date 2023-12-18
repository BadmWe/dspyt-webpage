import Link from "next/link";

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href}>
        <div {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <div href={href} {...rest} />;
  }

  return (
    <div target="_blank" rel="noopener noreferrer" href={href} {...rest} />
  );
};

export default CustomLink;
