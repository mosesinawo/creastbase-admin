import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CardUsers from '../../assets/data/CardUsers'
import CardAssets from '../../assets/data/CardAssets';
import AddUserModal from '../modals/AddUserModal';
import Tables from './Tables';

const TableTab = () => {


    const [openUserModal, setOpenUserModal] = React.useState(false);
    const handleOpenUserModal = () => setOpenUserModal(true)
    const handleCloseUserModal = () => setOpenUserModal(false)
    const { pathname } = useLocation();

    const path = pathname.split("/")[1]

    const tabRow = () => {

        if (path === "assets") {
            return CardAssets
        } else if (path === "users") {
            return CardUsers
        } else {

        }
    }
    console.log(tabRow())
    const header = tabRow()

    return (
        <>
            <div className='tabletab --flex-between'>
                <ul className="nav nav-tabs  tTabs-items" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="tab-item active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">{header[0].name}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="tab-item" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{header[1].name}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="tab-item" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">{header[2].name}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="tab-item" id="last-tab" data-bs-toggle="tab" data-bs-target="#last" type="button" role="tab" aria-controls="last" aria-selected="false">{header[3].name}</button>
                    </li>

                </ul>
                {path === "assets" && <Link to="/assets/upload" className='tTab-btn'>
                    Upload Assets
                </Link>}
                {path === "users" && <button onClick={handleOpenUserModal} className='tTab-btn'>Add New User</button>}

            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> <Tables assetLink="/assets/apartment" /></div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <Tables assetLink="/assets/land" /></div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> <Tables assetLink="/assets/properties" /></div>
                <div className="tab-pane fade" id="last" role="tabpanel" aria-labelledby="last-tab"> <Tables assetLink="/assets/event-hall" /></div>

            </div>
            <AddUserModal openUserModal={openUserModal} handleCloseUserModal={handleCloseUserModal} />

        </>
    )
}

export default TableTab