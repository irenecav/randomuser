import React from 'react';

export const UsersContext = Recat.createContext()

function UsersProvider(props){

    return(
        <UsersContext.UsersProvider
            value={{}}>
                {props.children}
        </UsersContext.UsersProvider>
    )
}

export default UsersProvider