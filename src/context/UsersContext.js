import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const UsersContext = React.createContext()


function UsersProvider(props){

const [userList, setUserList ] = useState([])
const [userToEdit, setUserToEdit] = useState()
const [userToDelete, setUserToDelete] = useState()
const [userEdited, setUserEdited]= useState()

useEffect(()=>{
    query()
},[])

const query = async () => {

    const url = 'https://randomuser.me/api/?results=50'

    const response = await axios(url)

    setUserList(response.data.results)

}

useEffect(() => {
    updateUserList()
  }, [userEdited])

 

  const updateUserList = () => {
   
    const usersUpdated = userList.map((user)=> {
      return user.login.uuid === userEdited.login.uuid ? userEdited : user
    })
    setUserList(usersUpdated)
  }



    return(
        <UsersContext.Provider
            value={{
                userList,
                setUserToEdit,
                setUserToDelete,
                userToDelete,
                userToEdit,
                setUserEdited,
                userEdited
            }}>
                {props.children}
        </UsersContext.Provider>
       
    )
}

export default UsersProvider