import React, { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';
import User from '../User/User'

function Showcase(){
    const { userList } = useContext(UsersContext)

    return(
        <ul className="Showcase">
            {userList.map((user) =>(
                <User key={user.login.uuid} user={user} />
            ) )}
        </ul>
    )
}

export default Showcase