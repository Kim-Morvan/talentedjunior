import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import styles from "./Auth.module.css";
import useAuth from '../../hooks/useAuth';

import Popup from 'reactjs-popup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from '../../api/axios';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrorMessage('');
    }, [user, password])
    useEffect(() => {
        toast.success("You are logged in");
    }, [])
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const serverResponse = await axios.post('/api/v1/auth/login',
            JSON.stringify({ email: user, password }),
            {
                headers: { 'Content-type': 'application/json' },
                withCredentials: false,
            }
            );
            console.log(JSON.stringify(serverResponse?.data));
            
            const access_token = serverResponse?.data?.access_token;
            const roles = serverResponse?.data?.roles;
            setAuth({ user, password, roles, access_token })
            setUser('');
            setPassword('');
            navigate(from, { replace: true })
        } catch (error) {
            if (!error?.serverResponse) {
                setErrorMessage('No server Response')
            } else if (error.serverResponse?.status === 400) {
                setErrorMessage('Missing email or Password')
            } else if (error.serverResponse?.status === 401) {
                setErrorMessage('Unauthorized')
            } else {
                setErrorMessage('Login Failed')
            }
            errorRef.current.focus();
        }
    }
    
    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <div className={styles.login__text}>
                    <span>Talented Junior</span>
                    <p>
                        “Rien au monde ne peut remplacer la persistance. Ni le talent: rien n'est plus commun que les personnes talentueuses sans succès. Ni le génie: le génie non reconnu est presque un proverbe. Ni l'éducation: le monde est rempli d'épaves éduquées. Seules la persistance et la détermination sont omnipotentes.”
                        <br/>
                        Calvin Coolidge
                    </p>
                </div>
                <div className={styles.login__form}>
                            <section>
                            <p ref={errorRef} className={styles.errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    htmlFor='email'
                                    type="text"
                                    id="email"
                                    placeholder='Adresse e-mail'
                                    ref={userRef}
                                    autoComplete="off"
                                    value={user}
                                    email="email"
                                    onChange={(event) => setUser(event.target.value)}
                                    required
                                />
                                <input
                                    htmlFor='password'
                                    type="password"
                                    id="password"
                                    placeholder='Mot de passe'
                                    autoComplete="off"
                                    value={password}
                                    password="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                                <button className={styles.login__formLoginBtn}>Se connecter</button>
                            </form>
                            <div className={styles.login__formRegister}>
                                <p>Pas encore de compte ?</p>
                                <Link to="register">
                                    {/* <Popup    trigger={} modal nested  ></Popup> */}
                                    <button className={styles.login__formRegisterBtn}>Créer un nouveau compte</button>
                                </Link>
                            </div>
                        </section>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Login
