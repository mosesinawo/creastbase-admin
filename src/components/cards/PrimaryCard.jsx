import React from 'react';
import home from "../../assets/images/home.svg";
import './Card.css'

const PrimaryCard = ({name, icon, number}) => {
    return (
        <div className='card'>
            <img className='card-img' src={icon} alt="home" />
            <p>{name}</p>
            <b>{number}</b>
        </div>
    )
}

export default PrimaryCard;