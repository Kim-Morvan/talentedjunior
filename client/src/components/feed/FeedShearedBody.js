import styles from "./Feed.module.css";

const FeedShearedBody = () => {
    return (
        <div className={styles.feedShearedBody}>
            <p className={styles.feedShearedBody__text}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            </p>
            <img src="https://www.ynov.com/wp-content/uploads/2014/01/metier-developpeur-web-ynov.jpg" alt=""  className={styles.feedShearedBody__img} />
        </div>
    )
}
export default FeedShearedBody