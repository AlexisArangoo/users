import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUser.css'

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, closeForm, setCloseForm}) => {

    

   const {register, reset, handleSubmit, watch, formState: { errors }} = useForm()

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
            <label className={`formuser-label ${errors.first_name && 'label-err'}`} htmlFor="first_name">First Name</label>
            <input className={`formuser-input ${errors.first_name && 'input-err'}`} {...register('first_name', {required:true})} type='text' id='first_name' />
            {errors.first_name && <span className='message-err'>name is required</span>}
        </div>
        <div className='formuser-group'>
            <label className={`formuser-label ${errors.last_name && 'label-err'}`} htmlFor="last_name">Last Name</label>
            <input className={`formuser-input ${errors.last_name && 'input-err'}`} {...register('last_name', {required: true})} type='text' id='last_name' />
            {errors.last_name && <span className='message-err'>lastname is required</span>}
        </div>
        <div className='formuser-group'>
            <label className={`formuser-label ${errors.email && 'label-err'}`} htmlFor="email">Email</label>
            <input className={`formuser-input ${errors.email && 'input-err'}`} {...register('email', {required: true})} type='email' id='email' />
            {errors.email && <span className='message-err'>email is required</span>}
        </div>
        <div className='formuser-group'>
            <label className={`formuser-label ${errors.password && 'label-err'}`} htmlFor="password">Password</label>
            <input className={`formuser-input ${errors.password && 'input-err'}`} {...register('password', {required: true})} type='password' id='password' />
            {errors.password && <span className='message-err'>password is required</span>}
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