import React, { useContext, Component } from 'react';
import { UsersContext } from '../../context/UsersContext';

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
                <div className="actions">
                <button
                onClick={e => setUserToEdit(user)}>Edit</button>
                <button
                onClick={e => setUserToDelete(user)}>Delete</button>
                </div>
            </li>
             ) }

</UsersContext.Consumer>
    )
}
}

export default User