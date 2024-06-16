import Link from "next/link";
import PropTypes from "prop-types";

import { convertToSlug } from "@/lib/utils/convertToSlug";

const Tag = ({
  text,
  textRounded = "rounded-md",
  paddingUpDown = "3px",
  paddingLeftRight = "4px",
}) => {
  return (
    <span style={{ userSelect: "none" }}>
      <Link
        href={`/tags/${convertToSlug(text)}`}
        className="items-center tracking-wide"
      >
        <span
          className={
            textRounded +
            " bg-emerald-400 dark:bg-blue-100 font-medium uppercase text-xs hover:text-indigo-700 text-stone-100 dark:text-blue-900 dark:hover:text-primary-400"
          }
          style={{
            paddingTop: paddingUpDown,
            paddingBottom: paddingUpDown,
            paddingRight: paddingLeftRight,
            paddingLeft: paddingLeftRight,
          }}
        >
          {text}
        </span>
      </Link>{" "}
    </span>
  );
};

export default Tag;

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  textRounded: PropTypes.string,
  paddingUpDown: PropTypes.string,
  paddingLeftRight: PropTypes.string,
};
