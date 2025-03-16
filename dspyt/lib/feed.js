const fs = require("fs");
const { Feed } = require("feed");
const { marked } = require("marked");
const path = require("path");
const matter = require("gray-matter");

const root = process.cwd();

function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, "");
}

function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const map = (fn) => (input) => input.map(fn);

const pathJoinPrefix = (prefix) => (extraPath) => path.join(prefix, extraPath);

const getAllFilesRecursively = (folder) =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);

const walkDir = (fullPath) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const flattenArray = (input) =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

async function getAllFilesContent(folder) {
  const prefixPaths = path.join(root, folder);

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter = [];

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
    // Remove Unexpected File
    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return;
    }
    const source = fs.readFileSync(file, "utf8");
    const { data: frontmatter, content: content } = matter(source);

    allFrontMatter.push({
      ...frontmatter,
      slug: formatSlug(fileName),
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      content: content,
    });
  });
  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}

async function GeneratedRssFeed() {
  const posts = await getAllFilesContent("posts");

  const siteTitle =
    "Dspyt - Data Science & Blockchain Insights Hub for Programming Enthusiasts";
  const siteDesc =
    "Dspyt.com is an online hub focused on data science and blockchain technology, specifically tailored for programming enthusiasts.";
  const siteUrl = "https://dspyt.com";
  const defaultLocale = "en";
  const author = "Dspyt Inc.";
  const email = "dspyt@dspyt.com";

  const feed = new Feed({
    title: siteTitle,
    description: siteDesc,
    id: siteUrl,
    link: siteUrl,
    language: defaultLocale,
    image: `${siteUrl}/DSPYT.png`,
    favicon: `${siteUrl}/big-data-svgrepo.svg`,
    copyright: `Copyright ${siteTitle} All rights reserved`,
    updated: new Date(),
    feedLinks: {
      json: `${siteUrl}/rss/feed.json`,
      rss2: `${siteUrl}/rss/feed.xml`,
      atom: `${siteUrl}/rss/feed.xml`,
    },
    author: {
      name: author,
      email: email,
      link: siteUrl,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/${post.slug}`,
      link: `${siteUrl}/${post.slug}`,
      description: marked(post.excerpt),
      content: marked(post.content),
      author: [
        {
          name: post?.authors?.length > 0 ? post.authors[0] : "Dspyt Dao",
          /* email: email,
          link: siteUrl, */
        },
      ],
      date: new Date(post.date),
      image: post.cover_image,
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync(`./public/rss/feed.json`, feed.json1());
  fs.writeFileSync(`./public/rss/feed.xml`, feed.rss2());
  fs.writeFileSync(`./public/rss/atom.xml`, feed.atom1());
}

GeneratedRssFeed().catch((err) =>
  console.error("Error generating RSS feed:", err)
);
