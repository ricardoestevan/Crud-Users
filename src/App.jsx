
import { useEffect, useState } from 'react';
import './App.css'
import useCrud from './hooks/useCrud';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';

function App() {

  //const urlBase = 'https://users-crud.academlo.tech/' //check paths with axios clg

  const urlBase = 'https://user-crud-academlo-av23.onrender.com/api/v1/'

  const [isOpen, setIsOpen] = useState(false)
  const [updateUser, setUpdateUser] = useState();
  const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase);

  useEffect(() => {
    const path = 'users';
    getUsers(path)
  }, []);
  
  console.log(users)

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className='app'>
    <header className='app__header'>
      <h1 className='app__title'>CRUD Users</h1>
      <button className='btn__create' onClick={handleOpen}> + <span><span>&nbsp;&nbsp;&nbsp;</span>Create User</span></button>
      </header>
      <UserForm
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setUpdateUser={setUpdateUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}

      />
      <div className='app__container'>
        {
          users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdateUser={setUpdateUser}
              />
          ))
        }
      </div>
    </div>
  )
}

export default App
