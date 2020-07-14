import React,{Fragment} from "react";
import Tag from "common/tags";

const NavLink = (props) => {
  const { navLinkList } = props;
  if (!navLinkList << 0) return <></>;
  const linkList = navLinkList.map((items) => (
    <Tag
      icon="fa-link"
      key={items.navID}
      tagName={items.navName}
      link={items.navlink}
    ></Tag>
  ));
  return <Fragment>{linkList}</Fragment>;
};

export default NavLink;
