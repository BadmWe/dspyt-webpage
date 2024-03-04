import { formatSlug, getFiles } from "@/lib/mdx";

export async function getAllProfiles() {
  const files = await getFiles("authors");
  let uniqueValues = [];

  files.forEach((file) => {
    const fileName = formatSlug(file);
    if (!uniqueValues.includes(fileName)) {
      uniqueValues.push(fileName);
    }
  });

  return uniqueValues;
}
