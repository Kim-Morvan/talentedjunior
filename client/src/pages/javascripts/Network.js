import styles from "../stylesheets/Network.module.css";

const Network = () => {
    return (
        <div className={styles.network}>
            <div className={styles.network__sidebar}></div>
            <div className={styles.network__main}></div>
            <div className={styles.network__widget}></div>
        </div>
    )
}
export default Network