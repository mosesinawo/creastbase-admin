import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CardUsers from '../../assets/data/CardUsers'
import CardAssets from '../../assets/data/CardAssets';
import AddUserModal from '../modals/AddUserModal';

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
                <ul className=' tTabs-items'>
                    <li  >
                        <a className="tab-active" a href="" color=''>{header[0].name}</a>
                    </li>
                    <li>
                        <a href="">{header[1].name}</a>
                    </li>
                    <li>
                        <a href="">{header[2].name}</a>
                    </li>
                    <li>
                        <a href="">{header[3].name}</a>
                    </li>
                </ul>
                {path === "assets" && <Link to="/assets/upload" className='tTab-btn'>
                    Upload Assets
                </Link>}
                {path === "users" && <button onClick={handleOpenUserModal} className='tTab-btn'>Add New User</button>}

            </div>
            <AddUserModal openUserModal={openUserModal} handleCloseUserModal={handleCloseUserModal} />

        </>
    )
}

export default TableTab