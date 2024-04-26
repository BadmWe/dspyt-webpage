import Link from "next/link";
import PropTypes from "prop-types";

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
    <a target="_blank" href={href}>
      <span {...rest} />
    </a>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  rest: PropTypes.object,
};

export default CustomLink;
