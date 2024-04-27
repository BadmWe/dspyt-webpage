import { getMDXComponent } from "mdx-bundler/client";
import PropTypes from "prop-types";
import { useMemo } from "react";

import Image from "./Image";
import CustomLink from "./Link";
import Pre from "./Pre";
import TOCInline from "./TOCInline";

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};

MDXLayoutRenderer.propTypes = {
  layout: PropTypes.string.isRequired,
  mdxSource: PropTypes.string.isRequired,
  rest: PropTypes.object,
};
