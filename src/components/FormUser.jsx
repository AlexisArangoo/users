import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUser.css'

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, closeForm, setCloseForm}) => {

    

   const {register, reset, handleSubmit} = useForm()

   useEffect(() => {
    reset(updateInfo)
   }, [updateInfo])

    const submit = (data) => {

        if (updateInfo) {
            updateUserById('/users', updateInfo.id, data)
            setUpdateInfo()
        } else {
            createNewUser('/users', data)
        }

        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthdsy: ''
        })
    }
    const handleCloseForm = () => {
        setCloseForm(true)
    }
    const handleClean = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthdsy: ''
        })
        setUpdateInfo()
    }
    
  return (
    <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
    <form onClick={e => e.stopPropagation()} className='formuser' onSubmit={handleSubmit(submit)}>
        <h2 className='formuser-title'>{updateInfo ? 'Update' : 'New User'}</h2>
        <div className="formuser-close" onClick={handleCloseForm}>x</div>
        <div className='formuser-group'>
            <label className='formuser-label' htmlFor="first_name">First Name</label>
            <input className='formuser-input' {...register('first_name', {
                required:{
                    value: true,
                    message: 'effewf'
                }
            })} type='text' id='first_name' />
        </div>
        <div className='formuser-group'>
            <label className='formuser-label' htmlFor="last_name">Last Name</label>
            <input className='formuser-input' {...register('last_name')} type='text' id='last_name' />
        </div>
        <div className='formuser-group'>
            <label className='formuser-label' htmlFor="email">Email</label>
            <input className='formuser-input' {...register('email')} type='email' id='email' />
        </div>
        <div className='formuser-group'>
            <label className='formuser-label' htmlFor="password">Password</label>
            <input className='formuser-input' {...register('password')} type='password' id='password' />
        </div>
        <div className='formuser-group'>
            <label className='formuser-label' htmlFor="birthday">Birthday</label>
            <input className='formuser-input' {...register('birthday')} type='date' id='birthday' />
        </div>
        <button className='formuser-btn'>{updateInfo ? 'Update this user' : 'Add a new user'}</button>
        <button className='btn-clean' onClick={handleClean}>Clean</button>
    </form>
    </div>
  )
}

export default FormUser