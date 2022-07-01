import styles from "../stylesheets/Chat.module.css";
import { Avatar } from '@mui/material';
import { GoVerified } from "react-icons/go";

const Chat = () => {
    return (
        <div className={styles.chat}>
            <div className={styles.chat__sidebar}>
                <div className={styles.chat__sidebarUsersWidget}>
                <div className={styles.chat__sidebarUsersWidget__user}>
                    <div className={styles.chat__sidebarUsersWidget__userAvatar}>
                        <Avatar src="" />
                    </div>
                    <div className={styles.chat__sidebarUsersWidget__userDescription}>
                        <span className={styles.chat__sidebarUsersWidget__userName}>
                            Kim Morvan
                            <GoVerified />
                        </span>
                        <span className={styles.chat__sidebarUsersWidget__userJob}>Développeur Fullstack Javascript</span>
                    </div>
                </div>
            </div>
            </div>



            <div className={styles.chat__main}>
                <div className={styles.chat__mainHeader}>
                    <h2>Messages</h2>
                </div>
            </div>
            



            <div className={styles.chat__widget}></div>
        </div>
    )
}
export default Chat