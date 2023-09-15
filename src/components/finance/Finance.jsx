import React, { useState } from 'react'
import PrimaryCard from '../cards/PrimaryCard'
import "./Assets.css"
import Tables from '../tables/Tables';
import TableTab from '../tables/TableTab';
import CardFinance from '../../assets/data/CardFinance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Finance = () => {

    const [header, setHeader] = useState([{ name: "name" },
    { name: "land" },
    { name: "Agent’s/Real Estate Company" },
    { name: "Agent’s Contact" },
    { name: "Full Price" },
    { name: <FontAwesomeIcon icon={faMagnifyingGlass} /> }])
    return (
        <div className='assets'>
            <div className='assets-cards'>
                {CardFinance.map((card) => <PrimaryCard name={card.name}
                    icon={card.image}
                    number={card.number} />)}

                <a className='--flex-center' style={{
                    marginLeft: '50px',
                    color: ' #3D79EF',
                    fontSize: '13px',
                    fontWeight: '500',
                    border: '1px solid #3D79EF',
                    height: '35px',
                    borderRadius: '5px',
                    padding: '0 10px'
                }} href="">Add New Subscription</a>
            </div>

            <div>
                <Tables />
            </div>
        </div>
    )
}

export default Finance;