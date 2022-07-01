import styles from "./Auth.module.css";

const Banner = () => {
    const date = new Date()
    const time = date.getHours()+':'+date.getMinutes();
    return (
        <div className={styles.banner}>
            <div className={styles.banner__counter}>
                <span>80</span>
                <p>Nombre de membres</p>
            </div>
            <div className={styles.banner__time}>
                <span>{ time }</span>
            </div>
        </div>
    )
}

export default Banner
