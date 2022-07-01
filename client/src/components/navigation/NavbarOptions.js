import styles from "./NavbarOptions.module.css";
// import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'

const NavbarOptions = ({ Icon, text, active }) => {
    return (
        <div className={styles.navbarOptions}>
            <span className={styles.navbarOptions__icon}>
                <Icon className={styles.navbarOptions__iconStyles}/>
            </span>             
        </div>
    )
}
export default NavbarOptions