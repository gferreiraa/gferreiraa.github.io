import SanityBlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <pre data-language={language}>
          <code>{code}</code>
          <p>{filename}</p>
        </pre>
      );
    },
  },
};

const BlogContent = ({ content }) => (
  <SanityBlockContent
    imageOptions={{ w: 320, h: 240, fit: "max" }}
    serializers={serializers}
    blocks={content}
  />
);

export default BlogContent;
