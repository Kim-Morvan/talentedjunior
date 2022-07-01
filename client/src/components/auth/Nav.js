import styles from "./Auth.module.css";
import { IoBook } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom'
import { GiEntryDoor } from "react-icons/gi";

const Nav = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.nav__link}>
                    <Link to="login">
                        <GiEntryDoor className={styles.nav__icon}/>
                        <span className={styles.nav__text}>Se connecter</span>
                    </Link>
                </div>
                <div className={styles.nav__link}>
                    <Link to="news">
                        <IoBook className={styles.nav__icon}/>
                        <span className={styles.nav__text}>Actualités emploi</span>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Nav
