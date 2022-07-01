import styles from "./Feed.module.css";
import { IoHeartOutline, IoChatboxEllipsesOutline, IoArrowRedoOutline  } from "react-icons/io5";

const FeedShearedFooter = () => {
    return (
        <div className={styles.feedShearedFooter}>
            <IoHeartOutline className={styles.feedShearedFooter__icon} />
            <IoChatboxEllipsesOutline className={styles.feedShearedFooter__icon} />
            <IoArrowRedoOutline className={styles.feedShearedFooter__icon} />
        </div>
    )
}
export default FeedShearedFooter