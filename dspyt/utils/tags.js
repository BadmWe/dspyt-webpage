import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function getAllTags() {
  let tagCount = {};
  const files = fs.readdirSync(path.join("posts"));
  // Iterate through each post, putting all found tags into `tags`
  files.map((filename) => {
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = tag;
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });

  return tagCount;
}
