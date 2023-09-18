import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import UserInfo from '../../components/userInfo/UserInfo'

const UserDetails = () => {
    return (
        <div className='homepage'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main">
                <UserInfo />
            </div>
        </div>
    )
}

export default UserDetails