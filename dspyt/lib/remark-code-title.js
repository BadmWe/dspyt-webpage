import { visit } from "unist-util-visit";

export default function remarkCodeTitles() {
  return (tree) =>
    visit(tree, "code", (node, index, parent) => {
      const nodeLang = node.lang || "";
      let language = "";
      let title = "";

      if (nodeLang.includes(":")) {
        language = nodeLang.slice(0, nodeLang.search(":"));
        title = nodeLang.slice(nodeLang.search(":") + 1, nodeLang.length);
      }

      if (!title) {
        return;
      }

      const titleNode = {
        type: "mdxJsxFlowElement",
        name: "div",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "className",
            value: "remark-code-title",
          },
        ],
        children: [{ type: "text", value: title }],
        data: { _xdmExplicitJsx: true },
      };

      parent.children.splice(index, 0, titleNode);
      node.lang = language;
    });
}
