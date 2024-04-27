import PropTypes from "prop-types";

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */

export default function TOCInline({
  toc,
  indentDepth,
  fromHeading,
  toHeading,
  asDisclosure,
  exclude,
}) {
  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i");

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  );

  const tocList = (
    <ul>
      {filteredToc.map((heading) => (
        <li
          key={heading.value}
          className={`${heading.depth >= indentDepth && "ml-6"}`}
        >
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {asDisclosure ? (
        <details open>
          <summary className="ml-6 pt-2 pb-2 text-xl font-bold">
            Table of Contents
          </summary>
          <div className="ml-6">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
    </div>
  );
}

TOCInline.propTypes = {
  toc: PropTypes.array.isRequired,
  indentDepth: 3,
  fromHeading: 1,
  toHeading: 6,
  asDisclosure: false,
  exclude: "",
};
