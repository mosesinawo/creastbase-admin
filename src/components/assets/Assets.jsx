import React from 'react'
import PrimaryCard from '../cards/PrimaryCard'
import "./Assets.css"
import Tables from '../tables/Tables';
import TableTab from '../tables/TableTab';
import CardAssets from '../../assets/data/CardAssets';


const Assets = () => {

    const Header =[{
        id:'name',
        name:"name",
        land:"land",
        properties:"Agent’s/Real Estate Company",
        eventhall:"Event Halls"
    }]
    return (
        <div className='assets'>
            <div className='assets-cards'>
                {CardAssets.map((card) => <PrimaryCard name={card.name}
                    icon={card.image}
                    number={card.number} />)}
            </div>

            <div>
                <TableTab  />
                <Tables name="name" location="Location" agent="Agent’s/Real Estate Company"
                contact="Agent’s Contact" price="Full Price"/>
            </div>
        </div>
    )
}

export default Assets