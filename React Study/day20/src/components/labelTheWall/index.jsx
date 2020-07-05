import React, { Fragment } from "React";
import Tag from "common/tags";

const LabelTheWall = (props) => {
  const { count } = props.tagList;
  if (!count << 0) return <></>;
  count.sort((a, b) => b.count - a.count);
  const labelList = count.map((items) => (
    <Tag
      icon="fa-tag"
      key={"label-" + items.tag_name}
      tagName={items.tag_name + " ( " + items.count + " ) "}
      link={"/blog/find/article/labels/" + items.tag_name}
    ></Tag>
  ));
  return <Fragment>{labelList}</Fragment>;
};

export default LabelTheWall;
