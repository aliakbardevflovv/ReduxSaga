import { useState, useEffect } from "react";
import axios from "../../../API/axios";

const Users = () => {
    const [users, setUsers] = useState() ;

    useEffect(() =>{
        let isMounted = true;
        const controller = new AbortController() ;
        const getUsers = async () => {
            try{
                const response  = await axios.get('/users', {
                    signal: controller.signal
                })

                console.log(response.data) ;
                isMounted && setUsers(response.data) ;

            }
            catch(err){
                console.log(err) ;
            } 
        }
        getUsers() ;

        return () => {
            isMounted = false ;
            controller.abort() ;

        }
    }, [])
    return(
    <>
        <h2>Users List</h2>

        {users?.length
        ? (
            <ul>
                {users.map((users, i) => <li key={i}>{user?.username}</li>)}
            </ul>
        ) : <p>Mo users to display</p>
    }

    <button onClick={() => refresh()}>Refresh</button>
    </>
    );
}

export default Users;