import { useNavigate, Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { IoPowerOutline, IoNotifications, IoHome } from "react-icons/io5";
import { IoMdChatbubbles, IoIosPeople } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { RiUserSearchFill } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Avatar } from '@mui/material';
import logo from '../../public/logo.png';


import HeaderNavOptions from "./HeaderNavOptions";
import styles from "./Header.module.css";

const Header = () => {
    const navigate = useNavigate();
    const logout = useLogout();
    const signOut = async () => {
        await logout();
        navigate("/");
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className={styles.header__nav}>
                <Link to="/">
                <HeaderNavOptions active Icon={IoHome}  text="Accueil" />
                </Link>
                <Link to="/chat">
                <div className={styles.header__notifications}>
                    <HeaderNavOptions active Icon={IoMdChatbubbles} text="" />
                    <span className={styles.header__notificationsCounter}>2</span>
                </div>
                </Link>
                <Link to="/groupes">
                <HeaderNavOptions active Icon={ImUsers} text="" />
                </Link>
                <Link to="/notifications">
                <div className={styles.header__notifications}>
                    <HeaderNavOptions active Icon={IoNotifications} />
                    <span className={styles.header__notificationsCounter}>2</span>
                </div>
                </Link>
                <Link to="/network">
                <HeaderNavOptions active Icon={HiUserGroup} text="" />
                </Link>
                <Link to="/users">
                <HeaderNavOptions active Icon={RiUserSearchFill} text="" />
                </Link>
            </div>

            <div className={styles.header__nav02}>
                <div className={styles.header__nav02BriefcaseIcon}>
                    <div className={styles.header__notifications}>
                        <HeaderNavOptions active Icon={BsFillBriefcaseFill} text="" />
                    <span className={styles.header__notificationsCounter}>2</span>
                </div>
                </div>
                <div className={styles.header__nav02AvatarWrapper}>
                    <Avatar className={styles.header__nav02Avatar} />
                    <span>Kim Morvan</span>
                </div>
                <div className={styles.header__logout}>
                    <IoPowerOutline onClick={signOut} className={styles.header__logoutIcon}/>
                </div>
            </div>
        </header>
    )
}

export default Header