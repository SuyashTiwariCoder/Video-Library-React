import React from "react";
import { FaRegCompass, FaHistory } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const ExplorePageBody = () => {
  const sidebarContent = [
    {
      id: "Explore",
      Icon: FaRegCompass,
      title: "Explore",
    },
    {
      id: "History",
      Icon: FaHistory,
      title: "History",
    },
    {
      id: "Like",
      Icon: AiFillLike,
      title: "Like",
    },
  ];
  return (
    <>
      <div className="skeleton">
        <div className="sidebar">
          {sidebarContent.map(({ id, Icon, title }) => (
            <h2 className="sidebar__component" key={id}>
              <Icon />
              {title}
            </h2>
          ))}

          {console.log(sidebarContent)}
        </div>
        <div className="main--content">Main Content</div>
      </div>
    </>
  );
};

export default ExplorePageBody;
