import Link from "next/link";

const Tag = ({ text }) => {
  text = text.split(" ").join("-");
  return (
    <Link href={`/tags/${text}`}>
      <div className="items-center mt-1 mr-3 rounded-md bg-blue-100 font-medium uppercase px-2 py-0.5 text-xs text-blue-800 hover:text-primary-600 dark:hover:text-primary-400">
        {text}
      </div>
    </Link>
  );
};

export default Tag;
