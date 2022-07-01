import styles from "./Feed.module.css";
import FeedEntryBox from "./FeedEntryBox"
import FeedHeader from "./FeedHeader"
import FeedSheared from "./FeedSheared"
import FeedSidebar from "./FeedSidebar"
import FeedWidget from "./FeedWidget"

import UsersWidget from "../container/users/UsersWidget"

const Feed = () => {
    return (
        <div className={styles.feed}>
            <div className={styles.feed__sidebar}>
                    <FeedSidebar />
                </div>
                <div className={styles.feed__main}>
                    <FeedHeader />
                    <FeedEntryBox />
                    <FeedSheared />


                    <UsersWidget />
                </div>
                <div className={styles.feed__widget}>
                    <FeedWidget />
                </div>
        </div>
    )
}
export default Feed