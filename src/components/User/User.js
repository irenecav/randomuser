import React, { useContext, Component } from 'react';
import { UsersContext } from '../../context/UsersContext';
import "./User.scss";


class User extends Component{

render(){
    const {user} = this.props

    return(
        <UsersContext.Consumer>
            { ({setUserToEdit, setUserToDelete})=> (
               
               <li className='user'>
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                <h1>
                    {user.name.first}
                    <span>{user.name.last}</span>
                </h1>
                <p>{user.phone}</p>
               
                <button
                className="edit"
                onClick={e => setUserToEdit(user)}>Edit</button>
                <button
                className="delete"
                onClick={e => setUserToDelete(user)}>Delete</button>
                
            </li>
             ) }

</UsersContext.Consumer>
    )
}
}

export default User