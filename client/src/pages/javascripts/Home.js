import Feed from "../../components/feed/Feed";
import styles from "../stylesheets/Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <Feed />
        </div>
    )
};

export default Home;
