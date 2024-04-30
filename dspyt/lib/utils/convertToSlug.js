export function convertToSlug(text) {
  const lowerCase = text.toLowerCase();
  const textNoEmptySpaces = lowerCase.replace(/([^a-zA-Z0-9])+/g, "-");
  const textNoleadingHyphens = textNoEmptySpaces.replace(/^-/g, "");
  const textNoTrailingHyphens = textNoleadingHyphens.replace(/-(?=$)/g, "");
  return textNoTrailingHyphens;
}
