import React from 'react';
import bell from "../../assets/images/bell.svg"
import avatar from "../../assets/images/avatar.svg"
import dropdown from "../../assets/images/dropdown.svg"
import "./Navbar.css";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faCoins, faFileInvoice, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import document from "../../assets/images/user.svg"

const Navbar = () => {

    const { pathname } = useLocation();

    const path = pathname.split("/")[1]
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const _path = capitalizeFirstLetter(path)

    const icon = () => {

        if (path === "assets") {
            return <FontAwesomeIcon icon={faFileInvoice} />
        } else if (path === "users") {
            return <FontAwesomeIcon icon={faUserGroup} />
        } else if (path === "finance") {
            return <FontAwesomeIcon icon={faCoins} />
        } else {
            return <FontAwesomeIcon icon={faChartColumn} />
        }
    }
    const image = icon();


    return (
        <div className='navbar --flex-between'>
            <p > {image} {_path || "Dashboard"}</p>
            <div className='navbar-right d-flex justify-content-center align-items-center  gap-2 '>
                <img src={bell} alt="bell" />
                <div className='d-flex align-items-center gap-2'>
                    <img src={avatar} alt="avatar" />
                    <p>Bright Coker</p>
                    <img src={dropdown} alt="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Navbar