import { NextPage, GetStaticProps } from "next";
import { client } from "../libs/client";
import styles from "../styles/blog.module.scss";

// required props
type RequiredProps = Required<{
  data: { contents: [] };
  contents: { id: string; title: string }[];
}>;

// optional props
type PartialProps = Partial<{}>;

type Props = RequiredProps & PartialProps;

const BlogPage: NextPage<Props> = (props: Props) => {
  return (
    <div className={`container leading-9 ${styles.blog}`}>
      {props.data.contents.map((post: any) => {
        return (
          <div key={post.id}>
            {/* considered no problem as this will be pre-rendered into static HTML */}
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      data,
    },
  };
};
export default BlogPage;
