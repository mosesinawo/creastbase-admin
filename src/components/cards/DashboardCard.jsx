import React from 'react';
import home from "../../assets/images/home.svg";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const DashboardCard = ({ name, type, number1, number2, icon1, icon2 }) => {
    return (
        <div className='card card-dashboard'>
            <div>
                <img src={icon1} alt="" />
                <p>{name}</p>
                <b>{number1}</b>
            </div>
            <div className='card-line'></div>
            <div>
                <img src={icon2} alt="" />
                <p>{type}</p>
                <b>{number2}</b>
            </div>
        </div>
    )
}

export default DashboardCard