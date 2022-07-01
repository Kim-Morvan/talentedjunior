import Header from "../header/Header";
import LayoutOutlet from "../LayoutOutlet";
import styles from "./Container.module.css";

const Container = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
            <Header />
            </div>
            <div className={styles.container__outles}>
                <LayoutOutlet />
            </div>
        </div>
    )
}
export default Container