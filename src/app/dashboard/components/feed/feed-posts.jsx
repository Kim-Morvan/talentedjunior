import { Avatar } from "@mui/material";
import { GoVerified } from "react-icons/go";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoAlbums } from "react-icons/io5";
import {
  IoHeartOutline,
  IoChatboxEllipsesOutline,
  IoArrowRedoOutline,
} from "react-icons/io5";

import { useEffect, useState } from "react";

const FeedPosts = ({ post }) => {
  const [like, setLike] = useState(post?.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // useEffect(() => {
  //     const fetchUser = async () => {
  //         const response = axiosPrivate.get(`users/${post.userId}`);
  //         setUser((await response).data)
  //     }
  //     fetchUser();
  // }, [post.userId]);

  console.log(user);
  return (
    <div className="relative flex flex-col bg-black p-3 rounded-2xl border-none">
      {/* -----------POST HEADER------------ */}
      <div className="absolute right-3 flex flex-row space-x-2">
        <AiOutlineLinkedin size={32} className="text-[#696969]" />
        <AiFillGithub size={30} className="text-[#696969]" />
        <IoAlbums size={32} className="text-[#696969]" />
      </div>
      <div className="flex flex-1 flex-row space-x-3">
        <div>
          <Avatar src={user[0]?.profilePicture} />
        </div>
        <div className="flex flex-col">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-white">
                {user[0]?.username} Kim Morvan
              </span>
              <span className="text-[#2196f3]">
                <GoVerified />
              </span>
            </div>
            <span className="text-sm text-[#696969]">
              Développeur Fullstack Javascript
            </span>
          </div>
          <div>
            <span className="text-sm font-thin text-[#696969]">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget sapien velit.
            </span>
          </div>
          <div className="flex flex-col space-y-2 pt-3">
            {/* -----------POST BODY------------ */}
            <div className="">
              <p className="text-sm text-white">
                {post?.desc}
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              </p>
            </div>
            <div className="">
              <img
                src="https://www.ynov.com/wp-content/uploads/2014/01/metier-developpeur-web-ynov.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>

            {/* -----------POST FOOTER------------ */}
            <div className="flex flex-row justify-between">
              <div className="flex items-center space-x-3">
                <span>
                  <IoHeartOutline
                    size={18}
                    className="text-[#696969]"
                    onClick={likeHandler}
                  />
                </span>
                <span className="text-[10px] text-white">{like}</span>
              </div>

              <div className="flex items-center space-x-3">
                <span>
                  <IoChatboxEllipsesOutline
                    size={18}
                    className="text-[#696969]"
                  />
                </span>
                <span className="text-[10px] text-white">{like}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <IoArrowRedoOutline size={18} className="text-[#696969]" />
                </span>
                <span className="text-[10px] text-white">{like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedPosts;
