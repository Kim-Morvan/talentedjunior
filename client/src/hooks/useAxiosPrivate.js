import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercepted = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.access_token}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );

        const responseIntercepted = axiosPrivate.interceptors.response.use(
            response => response,
            async error => {
                const previousRequest = error?.config;
                if (error?.response?.status === 403 && !previousRequest?.sent) {
                    previousRequest.sent = true;
                    const newAccessToken = await refresh();
                    previousRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(previousRequest);
                }
                return Promise.reject(error);
            }
        );
        console.log({newAccessToken: refresh()});
        // Clean up interceptors function
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercepted);
            axiosPrivate.interceptors.response.eject(responseIntercepted);
        }
    }, [auth, refresh])
    return axiosPrivate;
}

export default useAxiosPrivate;