import styles from "./Feed.module.css";
import { Avatar } from '@mui/material';
import { GoVerified } from "react-icons/go";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoAlbums } from "react-icons/io5";

const FeedShearedHeader = () => {
    return (
            <div className={styles.feedShearedHeaderWrapper}>
        <div className={styles.feedShearedHeader}>
            <div className={styles.feedShearedHeader__user}>
                <div className={styles.feedShearedHeader__userAvatar}>
                    <Avatar src="" />
                </div>
                <div className={styles.feedShearedHeader__userDescription}>
                    <span className={styles.feedShearedHeader__userName}>
                        Kim Morvan 
                        <GoVerified />
                    </span>
                    <span className={styles.feedShearedHeader__userJob}>Développeur Fullstack Javascript</span>
                </div>
            </div>
            <div className={styles.feedShearedHeader__credentials}>
                <AiOutlineLinkedin className={styles.feedShearedHeader__icon} />
                <AiFillGithub className={styles.feedShearedHeader__icon} />
                <IoAlbums className={styles.feedShearedHeader__icon} />
            </div>
            </div>
            <span className={styles.feedShearedHeader__pitch}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sapien velit.
            </span>
        </div>
    )
}
export default FeedShearedHeader