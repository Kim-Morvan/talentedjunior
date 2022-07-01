import styles from "./Feed.module.css";
import FeedShearedBody from "./FeedShearedBody";
import FeedShearedFooter from "./FeedShearedFooter";
import FeedShearedHeader from "./FeedShearedHeader";

const FeedSheared = () => {
    return (
        <div className={styles.feedSheared}>
            <FeedShearedHeader />
            <FeedShearedBody />
            <FeedShearedFooter />
        </div>
    )
}
export default FeedSheared