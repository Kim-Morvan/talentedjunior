import styles from "../stylesheets/Groupes.module.css";

const Groupes = () => {
    return (
        <div className={styles.groupes}>
            <div className={styles.groupes__sidebar}></div>
            <div className={styles.groupes__main}></div>
            <div className={styles.groupes__widget}></div>
        </div>
    )
};

export default Groupes;
