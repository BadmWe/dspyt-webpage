import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getFiles } from "./mdx";
import kebabCase from "./utils/kebabCase";

export async function getAllProfiles() {
  const files = await getFiles("authors");
  let uniqueValues = [];
  files.forEach((file) => {
    const source = fs.readFileSync(path.join("authors", file), "utf8");
    const { data } = matter(source);

    if (data.name) {
      const formattedProfile = kebabCase(data.name);
      if (!uniqueValues.includes(formattedProfile)) {
        uniqueValues.push(formattedProfile);
      }
    }
  });

  return uniqueValues;
}
