import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar';
import './DefaultLayout.scss'


const DefaultLayout = () => {

    const [showNav, setShowNav] = useState(false)

    const hideNav = () => {
        setShowNav(!showNav)
    }

    return (
        <div className='homepage'>
            <div>
                <Sidebar hideNav={hideNav} showNav={showNav} />
            </div>
            <div className={showNav ? "main showFull" : "main"}>
                <Navbar hideNav={hideNav} showNav={showNav} />
                <div className=''>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout