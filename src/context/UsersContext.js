import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const UsersContext = React.createContext()



function UsersProvider(props){

const [userList, setUserList ] = useState([])

useEffect(()=>{
    query()
},[])

const query = async () => {

    const url = 'https://randomuser.me/api/?results=50'

    const response = await axios(url)

    setUserList(response.data.results)

}


    return(
        <UsersContext.Provider
            value={{
                userList,
            }}>
                {props.children}
        </UsersContext.Provider>
       
    )
}

export default UsersProvider