import Banner from "../../components/auth/Banner";
import Nav from "../../components/auth/Nav";
import styles from "../stylesheets/Authentification.module.css";

const Authentification = () => {
    return (
        <div className={styles.authentification}>
            <Banner />
            <Nav />
        </div>
    )
}

export default Authentification
