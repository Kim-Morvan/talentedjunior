import styles from "../stylesheets/Notifications.module.css";

const Notifications = () => {
    return (
        <div className={styles.notifications}>
            <div className={styles.notifications__sidebar}></div>
            <div className={styles.notifications__main}></div>
            <div className={styles.notifications__widget}></div>
        </div>
    )
}
export default Notifications