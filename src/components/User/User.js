import React from 'react';

function User({ user }){
    return(
<li className='user'>
    <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
    <h1>
        {user.name.first}
        <span>{user.name.last}</span>
    </h1>
    <p>{user.phone}</p>
    <div className="actions">
    <button>Edit</button>
    <button>Delete</button>
    </div>
</li>
    )
}

export default User