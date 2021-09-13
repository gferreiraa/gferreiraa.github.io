import SanityBlockContent from "@sanity/block-content-to-react";
import HighlightCode from "./HighlightCode";
import { urlFor } from "lib/api";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt } }) => {
      return (
        <div className="blog-image">
          <img src={urlFor(asset).height(600).fit("max").url()} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => (
  <SanityBlockContent serializers={serializers} blocks={content} />
);

export default BlogContent;
