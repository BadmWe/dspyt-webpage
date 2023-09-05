import { slug } from "github-slugger";

const kebabCase = (str) => {
    return slug(str);
};

export default kebabCase;
