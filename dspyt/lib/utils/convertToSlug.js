export function convertToSlug(text) {
  const lowerCase = text.toLowerCase();
  const textNoEmptySpaces = lowerCase.replace(/([^a-zA-Z0-9])+/g, "-");
  const textNoleadingTrailingHyphens = textNoEmptySpaces.replace(
    /^(?:-)|(?:-)$/g,
    ""
  );
  return textNoleadingTrailingHyphens;
}
