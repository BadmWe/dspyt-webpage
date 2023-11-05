import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getFiles } from "./mdx";
import { convertToSlug } from "./utils/convertToSlug";

export async function getAllTags() {
  const files = await getFiles("posts");
  let tagCount = {};
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join("posts", file), "utf8");
    const { data } = matter(source);
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = convertToSlug(tag);
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
