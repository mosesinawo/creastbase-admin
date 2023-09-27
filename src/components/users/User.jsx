import React, { useState } from 'react'
import PrimaryCard from '../cards/PrimaryCard'
import "./Assets.css"
import Tables from '../tables/Tables';
import TableTab from '../tables/TableTab';
import CardUsers from '../../assets/data/CardUsers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Users = () => {

    const [taBHead, settaBHead] = useState({})


    return (
        <div className='assets'>
            <div className='assets-cards'>
                {CardUsers.map((card) => <PrimaryCard name={card.name}
                    icon={card.image}
                    number={card.number} />)}
            </div>
            <div>
                <TableTab />
            </div>
        </div>
    )
}

export default Users;