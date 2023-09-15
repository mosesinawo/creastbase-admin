import React from 'react'
import logo from "../../assets/images/logo.svg"
import user from "../../assets/images/user.svg"
import "./sidebar.css";
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCoins, faFileInvoice, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

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
        <div className='sidebar'>
            <FontAwesomeIcon icon={faCircleLeft} style={{ color: '#333' }}className='sidebar-close'/>
          
            <div className='sidebar-logo'>
                <img className='sidebar-logo-image' src={logo} alt="" />
            </div>
            <nav className='sidebar-nav'>
                <ul className='sidebar-list'>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/" className='sidebar-link' > <img src={user} alt="" /> Dashboard</NavLink></li>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/assets" className='sidebar-link' > <FontAwesomeIcon icon={faFileInvoice} />Assets</NavLink></li>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/users" className='sidebar-link' ><FontAwesomeIcon icon={faUserGroup} />Users</NavLink></li>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/finance" className='sidebar-link' > <FontAwesomeIcon icon={faCoins} /> Finance</NavLink></li>
                    <li className='sidebar-items'><NavLink exact activeClassName="active" to="/" className='sidebar-link' > <img src={user} alt="" /> Team Management</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar