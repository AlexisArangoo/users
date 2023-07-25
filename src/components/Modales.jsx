import { useState } from "react"
import './styles/Modales.css'

const Modales = ({setExitoCreate, setExitoDelete, setExitoUpdate, exitoCreate, exitoDelete, exitoUpdate}) => {


    const handleCloseModal = () =>{
        setExitoCreate(true)
        setExitoDelete(true)
        setExitoUpdate(true)
      }

  return (
    <>
    <div onClick={handleCloseModal} className={`exitocreate-container ${exitoCreate && 'closecreate'}`}>
        <article onClick={e => e.stopPropagation()} className='exitocreate'>
          <h2 className='exitocreate-title'>Created!</h2>
          <div onClick={handleCloseModal} className='close'>x</div>
          <hr />
            <p className='exitocreate-text'>The user has been created successfully</p>
          <hr />
        </article>
      </div>
      <div onClick={handleCloseModal} className={`exitocreate-container ${exitoDelete && 'closecreate'}`}>
        <article onClick={e => e.stopPropagation()} className='exitocreate'>
          <h2 className='exitocreate-title'>Removed!</h2>
          <div onClick={handleCloseModal} className='close'>x</div>
          <hr />
            <p className='exitocreate-text'>The user has been successfully removed</p>
          <hr />
        </article>
      </div>
      <div onClick={handleCloseModal} className={`exitocreate-container ${exitoUpdate && 'closecreate'}`}>
        <article onClick={e => e.stopPropagation()} className='exitocreate'>
          <h2 className='exitocreate-title'>Updated!</h2>
          <div onClick={handleCloseModal} className='close'>x</div>
          <hr />
            <p className='exitocreate-text'>The user has been successfully updated</p>
          <hr />
        </article>
      </div>
    </>
  )
}

export default Modales