import React, { useContext, useRef } from 'react';
import Modal from 'react-modal';
import "./EditUserModal.scss";
import { UsersContext } from '../../context/UsersContext';

function EditUserModal(){

    const { setUserEdited, userToEdit, setUserToEdit } = useContext(UsersContext)
    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const phoneRef = useRef('')

    const handelSubmit = e => {
        setUserEdited({
          ...userToEdit,
          name: {
            first: firstNameRef.current.value,
            last: lastNameRef.current.value
          },
          phone : phoneRef.current.value
        });
        closeModal()
      };
    
    const closeModal = () => {
        setUserToEdit(undefined)
    }  


    return(
        
        <Modal className="modal" isOpen={userToEdit} onRequestClose={closeModal}>
 <form className="user" onSubmit={handelSubmit}>
        <img
          src={userToEdit && userToEdit.picture.large}
        />
        <h1 className="user__name">
          <input
            type="text"
            placeholder="First name"
            ref={firstNameRef}
            defaultValue={userToEdit && userToEdit.name.first}
            
          />
          <span>
            <input
              type="text"
              placeholder="Last name"
              ref={lastNameRef}
              defaultValue={userToEdit && userToEdit.name.last}
              
            />
          </span>
        </h1>

        <p className="user__phone">
          <input
            type="text"
            placeholder="Phone number"
            ref={phoneRef}
            defaultValue={userToEdit && userToEdit.phone}
           
          />
        </p>
        <div className="actions">
          <button className="delete">
            Close
          </button>
        </div>
      </form>

        </Modal>

    )
}

export default EditUserModal