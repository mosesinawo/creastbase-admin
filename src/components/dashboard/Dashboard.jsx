import React from 'react'
import DashboardCard from '../cards/DashboardCard'
import PrimaryCard from '../cards/DashboardCard'
import ProgressChart from '../charts/ProgressChart'
import AssetsView from '../assets/AssetsView'
import CardUsers from '../../assets/data/CardUsers'
import "./Dashboard.scss";
import Barchart from '../charts/BarChart'
import Linechart from '../charts/LineChart'
import { faArrowDown, faArrowUp, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardDashBoard from '../../assets/data/CardDashBoard'
import { DocumentText, Layer, Profile2User, StatusUp } from 'iconsax-react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {

    const { pathname } = useLocation();
    const path = pathname.split("/")[1]
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const _path = capitalizeFirstLetter(path)

    const icon = () => {

        if (path === "assets") {
            return <DocumentText size="25" />
        } else if (path === "users") {
            return <Profile2User size="25" />
        } else if (path === "finance") {
            return <Layer size="25" />
        } else {
            return <StatusUp size="25" />
        }
    }
    const image = icon();

    return (
        <div className='dashboard'>
             <p className='dashboard-name' style={{color:'#262C55', fontSize:16}} > {image} &nbsp; {_path || "Dashboard"}</p>
            <div className="dashboard-top ">
                <div className="dashboard-cards d-flex flex-column justify-content-between">
                    {CardDashBoard.map((item) => {
                        return (<DashboardCard name={item.name} type={item.type} number1={item.number1}
                            number2={item.number2} icon1={item.icon1} icon2={item.icon2} />)
                    })}
                    {/* <DashboardCard name="Land" type="Properties" number="304" number2="106" /> */}
                    <div className='card' style={{ width: '267px', height: '113px', marginBottom: 10 }}>
                        <img className='card-img' src={CardUsers[3].image} alt="home" />
                        <p>Event Halls</p>
                        <b>89</b>
                    </div>
                </div>
                <ProgressChart />
                <AssetsView />
            </div>

            <div className="dashboard-bottom">
                <div className="dashboard-bottom-left">
                    <p style={{ fontSize: '18px', color: '#021B33', fontWeight: '600' }}>Users Insight</p>
                    <p className='mt-2' style={{ color: '#021B33' }}><FontAwesomeIcon icon={faChartSimple} size='lg' style={{ color: '#F1A5C2' }} />
                        &nbsp; Engagement rate</p>
                    <p className='mt-2' style={{ color: '#021B33' }}> 67%</p>
                    <p className='mt-2'><span style={{ color: '#4ABE82' }}><FontAwesomeIcon icon={faArrowUp} /> &nbsp;1.2%</span> vs last week</p>
                    <p className='mt-3'>from 1-12 of March, 2023</p>
                    <Barchart />
                </div>
                <div className="dashboard-bottom-right">
                    <p className='mt-2' style={{ color: '#021B33' }}>Active Users</p>
                    <p className='mt-2' style={{ color: '#021B33' }}>367</p>
                    <p className='mt-2'><span style={{ color: '#CA1551' }}><FontAwesomeIcon icon={faArrowDown} />&nbsp;1.2%</span> vs last week</p>
                    <p className='mt-3'>from 1-12 of March, 2023</p>
                    <Linechart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard