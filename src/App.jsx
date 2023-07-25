import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import Modales from './components/Modales'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)
  const [exitoCreate, setExitoCreate] = useState(true)
  const [exitoUpdate, setExitoUpdate] = useState(true)
  const [exitoDelete, setExitoDelete] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getAllUsers, createNewUser, deleteUserById, updateUserById ] = useFetch(baseUrl, setCloseForm, setExitoCreate, setExitoDelete, setExitoUpdate)

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  
  return (
    <div>
      <Modales 
      setExitoCreate = {setExitoCreate}
      setExitoDelete = {setExitoDelete}
      setExitoUpdate = {setExitoUpdate}
      exitoCreate = {exitoCreate}
      exitoDelete = {exitoDelete}
      exitoUpdate = {exitoUpdate}
      />

      <div className="header">
      <h1 className='header-title'>Users</h1>

      <button className='header-btn' onClick={handleOpenForm}>+ Create new user</button>
      </div>

      <FormUser 
      createNewUser = {createNewUser}
      updateInfo = {updateInfo}
      updateUserById = {updateUserById}
      setUpdateInfo = {setUpdateInfo}
      closeForm = {closeForm}
      setCloseForm = {setCloseForm}
      />

      <div className='users-container'> 
        {
          users?.map(user => (
            <UserCard
            key = {user.id}
            user = {user}
            deleteUserById = {deleteUserById}
            setUpdateInfo = {setUpdateInfo}
            setCloseForm = {setCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
