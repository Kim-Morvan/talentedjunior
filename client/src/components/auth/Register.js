import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider';
import styles from "./Auth.module.css";

import axios from '../../api/axios';

const Register = () => {
    const { setAuth } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/authentification/login";

    const userRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrorMessage('');
    }, [username, email, password])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/v1/auth/register',
                JSON.stringify({ username, email, password }),
                {
                    headers: { 'Content-type': 'application/json' },
                    withCredentials: false
                }
                );
                console.log(response);
            setAuth({ username, email, password })
            setUsername('');
            setEmail('');
            setPassword('');
            setSuccess(true)
            navigate(from, { replace: true })
        } catch (error) {
            if (!error?.response) {
                setErrorMessage('No server Response')
            } else
            if (error.response?.status === 400) {
                setErrorMessage('Missing Username or Password')
            } else
            if (error.response?.status === 401) {
                setErrorMessage('Unauthorized')
            } else {
                setErrorMessage('Register Failed')
            }
            errorRef.current.focus();
        }
    }

    return (
        <div className={styles.register}>
            <div className={styles.register__container}>
                <div className={styles.register__text}>
                    <span>S'inscrire</span>
                </div>
                <div className={styles.register__form}>
                    {success ? (
                            <section>
                                <h1>You are logged in</h1>
                                <br/>
                                <p>
                                    {/* <a href='#'>Go to home page</a> */}
                                </p>
                            </section>
                        ) : (
                            <section>
                            <p ref={errorRef} className={styles.errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    htmlFor='username'
                                    type="text"
                                    id="username"
                                    placeholder='Nom'
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(event) => setUsername(event.target.value)}
                                    value={username}
                                    required
                                />
                                <input
                                    htmlFor='email'
                                    type="email"
                                    id="email"
                                    placeholder='Adresse e-mail'
                                    ref={userRef}   
                                    autoComplete="off"
                                    onChange={(event) => setEmail(event.target.value)}
                                    value={email}
                                    required
                                />
                                <input
                                    htmlFor='password'
                                    type="password"
                                    id="password"
                                    placeholder='Mot de passe'
                                    autoComplete="off"
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                    required
                                />
                                <button>S’inscrire</button>
                            </form>
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Register
