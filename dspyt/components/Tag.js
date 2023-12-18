import { convertToSlug } from "@/lib/utils/convertToSlug";
import Link from "next/link";

const Tag = ({ text, paddingPx = "2px", textRounded = "rounded-md" }) => {
  return (
    <Link
      href={`/tags/${convertToSlug(text)}`}
      className="items-center tracking-wide"
    >
      <span
        className={
          textRounded +
          " bg-blue-100 font-medium uppercase text-xs text-blue-900 hover:text-primary-600 dark:hover:text-primary-400"
        }
        style={{ padding: paddingPx, marginRight: "4px" }}
      >
        {text}{" "}
      </span>
    </Link>
  );
};

export default Tag;
