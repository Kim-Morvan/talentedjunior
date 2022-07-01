import styles from "./UsersWidget.module.css";
import { Avatar, Button } from '@mui/material';
import { GoVerified } from "react-icons/go";
import GetAllUsers from "../../GetAllUsers";

const UsersWidget = () => {
    return (
        <div className={styles.usersWidgetWrapper}>
            <div className={styles.usersWidget}>
                <div className={styles.usersWidget__user}>
                    <div className={styles.usersWidget__userAvatar}>
                        <Avatar src="" />
                    </div>
                    <div className={styles.usersWidget__userDescription}>
                        <span className={styles.usersWidget__userName}>
                            Kim Morvan
                            <GetAllUsers />
                            <GoVerified />
                        </span>
                        <span className={styles.usersWidget__userJob}>Développeur Fullstack Javascript</span>
                    </div>
                </div>
            <div className={styles.usersWidget__button}>
                <Button size="small" variant="contained" >Suivre</Button>
            </div>
            </div>
            <span className={styles.usersWidget__pitch}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sapien velit.
            </span>
        </div>
    )
}
export default UsersWidget