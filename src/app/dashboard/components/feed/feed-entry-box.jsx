import styles from "./Feed.module.css";
import { FcAddImage, FcCalendar } from "react-icons/fc";
import { Avatar, Button } from "@mui/material";

const FeedEntryBox = () => {
  return (
    <div className="w-full p-3 rounded-2xl bg-black">
      <form className="flex flex-col space-y-5">
        <div className="flex space-x-3">
          <Avatar />
          <input
            className="flex-1 px-5 rounded-2xl bg-[#0f0f0f] text-white border-none"
            placeholder="Commencer un post..."
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-1 flex-row space-x-3">
            <FcAddImage size={32} />
            <FcCalendar size={32} />
          </div>
          <Button
            size="small"
            variant="contained"
            className="px-5 py-1 rounded-2xl capitalize bg-[#2196f3]"
          >
            Publier
          </Button>
        </div>
      </form>
    </div>
  );
};
export default FeedEntryBox;
