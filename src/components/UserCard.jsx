import './styles/UserCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setCloseForm}) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        setCloseForm(false)
    }
  return(
    <article className='usercard'>
        <div className="container-icon">
        <img className='usercard-icon' src="/images/user.png" alt="" />
        </div>
        <h2 className='usercard-name'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr className='usercard-line' />

        <ul className='usercard-list'>
            <li className='usercard-item'>
                <span className='usercard-item-label'>Email</span>
                <span className='usercard-item-value'><i className='bx bx-envelope'></i> {user.email}</span>
            </li>
            <li className='usercard-item'>
                <span className='usercard-item-label'>Birthday</span>
                <span className='usercard-item-value'><i className='bx bx-gift'></i> {user.birthday}</span>
            </li>
        </ul>
        <hr className='usercard-line' />

        <footer className='usercard-footer'>
            <button onClick={handleUpdate} className='footer-update'><i className='bx bx-edit'></i></button>
            <button onClick={handleDelete} className='footer-delete'><i className='bx bx-trash'></i></button>
        </footer>
    </article>
  )
}

export default UserCard