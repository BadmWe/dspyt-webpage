import kebabCase from "@/lib/utils/kebabCase";
import Link from "next/link";

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`} legacyBehavior>
      <a className="items-center mt-1 mr-3 rounded-md bg-blue-100 font-medium uppercase px-2 py-0.5 text-xs text-blue-800 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(" ").join("-")}
      </a>
    </Link>
  );
};

export default Tag;
