import { useState } from 'react';
import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();
    const [user, setUser] = useState('');

    const logout = async () => {
        setAuth({});
        try {
            const serverResponse = await axios.get('/api/v1/logout',
            JSON.stringify({ refresh_token: user }),
            {
                headers: { 'Content-type': 'application/json' },
                withCredentials: false,
            }
            );
            console.log(JSON.stringify(serverResponse?.data));
            const refresh_token = serverResponse?.data?.refresh_token;
            setUser({ refresh_token });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout