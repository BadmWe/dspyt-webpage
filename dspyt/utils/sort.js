export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

export const sortDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};
