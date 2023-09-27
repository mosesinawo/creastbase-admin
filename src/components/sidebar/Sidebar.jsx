import React from 'react'
import logo from "../../assets/images/logo-icon.svg"
import close from "../../assets/images/close.svg"
import "./Sidebar.scss";
import { NavLink, useLocation } from 'react-router-dom';
import { Data2, DocumentText, Layer, Profile2User, StatusUp } from 'iconsax-react';

const Sidebar = ({ hideNav, showNav }) => {

    console.log(showNav)

    const { pathname } = useLocation();

    const path = pathname.split("/")[1]

    console.log(path)

    const headerRow = () => {

        if (path === "assets") {
            return AssetsTableHead
        } else if (path === "users") {
            return UsersTableHead
        } else if (path === "finance")
            return FinanceTableHead
    }


    const handleHide = () => {

    }
    return (
        <div className={showNav ? "sidebar hideNav" : "sidebar"}>

            <div className='sidebar-logo'>
                <div className='d-flex gap-2'>
                    <img className='sidebar-logo-image' src={logo} alt="" />
                    <p className='sidebar-logo-text'>{!showNav && 'crestbase'}</p>
                </div>
                <img className='sidebar-close' src={close} alt="close" onClick={hideNav} />
            </div>
            <nav className='sidebar-nav'>
                <ul className='sidebar-list'>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/dashboard" className='sidebar-link' > <StatusUp size="20" /> {!showNav && "Dashboard"}</NavLink></li>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/assets" className='sidebar-link' > <DocumentText size="20" />{!showNav && "Assets"}</NavLink></li>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/users" className='sidebar-link' ><Profile2User size="20" />{!showNav && "Users"}</NavLink></li>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/finance" className='sidebar-link' > <Layer size="20" /> {!showNav && "Finance"}</NavLink></li>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/" className='sidebar-link' > <Data2 size="20" /> {!showNav && "Team Management"}</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar