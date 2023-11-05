import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import { convertToSlug } from "./utils/convertToSlug";

export default function remarkTocHeadings(options) {
  return (tree) =>
    visit(tree, "heading", (node) => {
      const textContent = toString(node);
      options.exportRef.push({
        value: textContent,
        url: "#" + convertToSlug(textContent),
        depth: node.depth,
      });
    });
}
