import styles from "./Header.module.css";
// import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'

const HeaderNavOptions = ({ Icon, text, active }) => {
    return (
        <div className={styles.headerNavOptions}>
            <span className={styles.headerNavOptions__icon}>
                <Icon className={styles.headerNavOptions__iconStyles}/>
            </span>             
        </div>
    )
}
export default HeaderNavOptions