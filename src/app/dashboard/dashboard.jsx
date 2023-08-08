"use client";

import FeedEntryBox from "./components/feed/feed-entry-box";
import FeedPosts from "./components/feed/feed-posts";

export default function Dashboard() {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="w-full max-w-6xl flex flex-row space-x-2 ">
        <div className="w-1/2 bg-black"></div>
        <div className="w-full px- space-y-2">
          <FeedEntryBox />
          <FeedPosts />
        </div>
        <div className="w-1/2 bg-black"></div>
      </div>
    </div>
  );
}
