import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, "");
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join("posts"));

  const allFrontMatter = [];

  files.forEach((file) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", file), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(file),
        date: frontmatter.date
          ? new Date(frontmatter.date).toISOString()
          : null,
      });
    }
  });

  return allFrontMatter;
}
