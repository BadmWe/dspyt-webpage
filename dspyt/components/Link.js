import Link from "next/link";

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href?.startsWith("/");
  const isAnchorLink = href?.startsWith("#");

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
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {" "}
    </a>
  );
};

export default CustomLink;
