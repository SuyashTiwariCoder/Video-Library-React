import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { RiPlayListAddFill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { useInfo } from "./../Context/GetContext";

const Videos = () => {
  const [display, setDisplay] = useState(false);
  const { video } = useInfo();
  console.log(video, "from upper");
  return (
    <>
      {video.map(
        ({ _id, title, creator, createdTime, thumbnailImg, avatarImg }) => {
          return (
            <>
              {console.log(video, "lol")}

              <div className="video__body" key={_id}>
                <div className="video__thumbnailAndDurationContainer">
                  <img src={thumbnailImg} alt="" />
                  <div className="video__duration">4:45</div>
                </div>
                <div className="video__details">
                  <div className="video__avatar">
                    <img src={avatarImg} alt="" />
                  </div>
                  <div className="video__detailTab">
                    <div className="video__heading">{title}</div>
                    <div className="video__creatorName">{creator}</div>
                    <div className="video__DateAndViews">
                      6.5M • {createdTime}
                    </div>
                  </div>
                  <div className="video__more">
                    <FiMoreVertical
                      size={25}
                      onClick={() => {
                        setDisplay(!display);
                      }}
                    />
                    <div
                      className={
                        display
                          ? "video__dropdown video__dropdown--active"
                          : "video__dropdown video__dropdown--NotActive"
                      }
                    >
                      <div className="video__dropdownElement">
                        <RiPlayListAddFill size={20} /> Save to Playlist
                      </div>
                      <div className="video__dropdownElement">
                        <AiFillLike size={20} /> Like This Video
                      </div>
                      <div className="video__dropdownElement">
                        <MdWatchLater size={20} /> Add To WatchLater
                      </div>
                      <div className="video__dropdownElement">
                        <FaShare size={20} /> Share
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      )}
    </>
  );
};

export default Videos;
