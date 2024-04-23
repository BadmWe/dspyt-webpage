export function convertToSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zA0-9\s-]+/g, "-") // Grouping characters and whitespace together
    .replace(/^-+|-+$/g, "") // Ensuring the correct grouping for handling leading and trailing hyphens
    .replace(/-+/g, "-"); // Grouping to handle consecutive hyphens
}
