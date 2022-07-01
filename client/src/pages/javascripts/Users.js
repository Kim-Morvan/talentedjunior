import UsersWidget from "../../components/container/users/UsersWidget";
import GetAllUsers from "../../components/GetAllUsers"
import styles from "../stylesheets/Users.module.css";

const Users = () => {
    const users = GetAllUsers();
    return (
        <div className={styles.users}>
            <div className={styles.users__sidebar}></div>
            <div className={styles.users__main}>
            <GetAllUsers />
            <UsersWidget  />
            </div>
            <div className={styles.users__widget}></div>
        </div>
    )
}
export default Users























// import { useState, useEffect } from "react";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";

// import useRefreshToken from "../../hooks/useRefreshToken";

// const Users = () => {
//     const [users , setUsers] = useState();
//     const navigate = useNavigate();
//     const location = useLocation();
    
//     const axiosPrivate = useAxiosPrivate();
//     const refresh = useRefreshToken()

//     useEffect(() => {
//         let unmountComponent = true;
//         const controller = new AbortController();

//         const getAllUsers = async () => {
//             try {
//                 const serverResponse = await axiosPrivate.get('/api/v1/users',{
//                     signal: controller.signal
//                 });
//                 console.log((serverResponse?.data?.getAllUsersDetails));

//                 unmountComponent && setUsers(serverResponse?.data?.getAllUsersDetails)
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         getAllUsers();
//         return () => {
//             unmountComponent = false;
//             controller.abort();
//         }
//     }, [axiosPrivate, location, navigate])
//     return (
//         <article>
//             <h2>Users List</h2>
//             {users?.length
//                     ? (
//                         <ul>
//                             {users && users.map((user, index) => {
//                                 return (
//                                     <li key={index}>
//                                         {user?.username}<br></br>
//                                     </li>
//                                 )
//                             })}
//                         </ul>
//                     )
//                     : <p>No users to display</p>
//             }
//             <button onClick={() => refresh()}>Refresh</button>
//         </article>
//     )
// };

// export default Users;


