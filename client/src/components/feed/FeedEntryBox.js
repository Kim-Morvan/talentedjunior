import styles from "./Feed.module.css";
import { FcAddImage, FcCalendar } from "react-icons/fc";
import { Avatar, Button } from '@mui/material';

const FeedEntryBox = () => {
    return (
        <div className={styles.FeedEntryBox}>
            <form className={styles.FeedEntryBox__form}>
                <div className={styles.FeedEntryBox__formInput}>
                    <Avatar className={styles.FeedEntryBox__avatar} />
                    <input className={styles.FeedEntryBox__input} placeholder='Commencer un post...' />
                </div>
                <div className={styles.FeedEntryBox__formButton}>
                <div className={styles.FeedEntryBox__formButtonIcons}>
                    <FcAddImage className={styles.FeedEntryBox__formIcon} />
                    <FcCalendar className={styles.FeedEntryBox__formIcon} />
                </div>
                <Button size="small" variant="contained" >Publier</Button>
                </div>
            </form>

        </div>
    )
}
export default FeedEntryBox