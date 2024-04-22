
import React from 'react';
import { Modal, Button } from '@mui/material';
import './styles/userCard.css';

const UserCard = ({ user, deleteUser, setUpdateUser }) => {
    const [open, setOpen] = React.useState(false);

    const handleDelete = () => {
        // Open the modal to confirm deletion
        setOpen(true);
    };

    const handleConfirmDelete = () => {
        // Perform deletion and close modal
        deleteUser('users', user.id);
        setOpen(false);
    };

    const handleEdit = () => {
        setUpdateUser(user);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section className='user'>
            <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
            <hr className='user__line'/>
            <ul className='user__list'>
                <li className='user__item'><span><ion-icon name="mail-outline"></ion-icon> email: </span><span>{user.email}</span></li>
                <li className='user__item'><span><ion-icon name="gift-outline"></ion-icon> Birthday: </span><span> {user.birthday} </span></li>
            </ul>
            <hr className='user__line'/>
            <div className='user__buttons'>
                <button className='user__btn1' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
                <button className='user__btn2' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <div className='modal'>
                        <h2 id="modal-title">Confirm Deletion</h2><br/>
                        <p id="modal-description">Are you sure you want to delete user {user.first_name} {user.last_name}</p><br/>
                        <div className='modal__buttons'>
                            <Button onClick={handleClose} variant="contained">Cancel</Button>
                            <Button onClick={handleConfirmDelete} variant="contained" color="error">Delete</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </section>
    );
};

export default UserCard;
