import React from 'react';
import home from "../../assets/images/home.svg";
import './Card.scss'

const PrimaryCard = ({name, icon, number}) => {
    return (
        <div className='card'>
            <img className='card-img' src={icon} alt="home" />
            <p className='card-text'>{name}</p>
            <b>{number}</b>
        </div>
    )
}

export default PrimaryCard;