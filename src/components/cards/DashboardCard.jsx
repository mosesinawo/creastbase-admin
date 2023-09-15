import React from 'react';
import home from "../../assets/images/home.svg";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const DashboardCard = ({ name, type, number, number2 }) => {
    return (
        <div className='card card-dashboard'>
            <div>
                <FontAwesomeIcon icon={faCircleUser} />
                <p>{name}</p>
                <b>{number}</b>
            </div>
            <div className='card-line'></div>
            <div>
                <FontAwesomeIcon icon={faCircleUser} />
                <p>{type}</p>
                <b>{number2}</b>
            </div>
        </div>
    )
}

export default DashboardCard