import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/userForm.css'

const UserForm = ({createUser, updateUser, editUser, setUpdateUser, isOpen, setIsOpen}) => {
    /** first_name, last_name, email, password, birthday*/
    const{handleSubmit, register, reset} = useForm();

    useEffect(() => {
        if (updateUser){
            reset(updateUser)
            setIsOpen(true)
        }
    }, [updateUser]);
    


    const submit = data => {
        if (updateUser) {
            editUser('users', data, updateUser.id)
            setUpdateUser();
        } else {
            createUser('users', data)
        }
        setIsOpen(false)
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
    }
    const handleClose = () => {
        setIsOpen(false)
        setUpdateUser();
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
    }

  return (
    <div className={`form__back ${isOpen && 'active'}`}>
        <form className='form' onSubmit={handleSubmit(submit)}>
        <button className='form__close' onClick={handleClose} type='button'>x</button>
        <h2 className='form__title'>Add/Edit User</h2>
            <div className='form__item'>
                <label htmlFor="first_name">Name </label>
                <input {...register('first_name')} id='first_name' placeholder='Name' type="text"/>
            </div>
            <div className='form__item'>
                <label htmlFor="last_name">Last Name </label>
                <input {...register('last_name')}id='last_name' placeholder='Last Name' type="text"/>
            </div>
            <div className='form__item'>
                <label htmlFor="email">Email </label>
                <input {...register('email')}id='email' placeholder='email' type="email"/>
            </div>
            <div className='form__item'>
                <label htmlFor="password">Password </label>
                <input {...register('password')}id='password' placeholder='password' type="password"/>
            </div>
            <div className='form__item'>
                <label htmlFor="birthday">Birthday </label>
                <input {...register('birthday')}id='birthday' type="date"/>
            </div>
            <button className='form__btn'>Save</button>
        </form>
     
    </div>
  )
}

export default UserForm