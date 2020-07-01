import React, { Fragment } from "React";
import Tag from "common/tags";

const BlogFiling = (props) => {
  const { filingList } = props;
  if (!filingList << 0) return <></>;
  filingList.sort((a, b) => b.count - a.count);
  const newFilingList = filingList.map((items) => (
    <Tag
      key={"filing-" + items.createdAt}
      tagName={items.createdAt + " ( " + items.count + "篇 )"}
      link={"/blog/filing/" + items.createdAt}
      icon="fa-bookmark"
    ></Tag>
  ));
  return <Fragment>{newFilingList}</Fragment>;
};

export default BlogFiling;
