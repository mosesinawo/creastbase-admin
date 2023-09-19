import React, { useEffect, useState } from 'react'
import "./Tables.scss";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faEllipsisVertical, faFileCircleXmark, faMagnifyingGlass, faUserPen } from '@fortawesome/free-solid-svg-icons'
import AssetsTableHead from '../../assets/data/AssetsTableHead';
import { Link, useLocation } from 'react-router-dom';
import UsersTableHead from '../../assets/data/UsersTableHead';
import FinanceTableHead from '../../assets/data/FinanceTableHead';
import viewProfile from '../../assets/images/asset-profile.png'
import TableBody from './TableBody';
import Trash from "../../assets/images/trash.png"
import { Button, Modal } from 'react-bootstrap';

const Tables = () => {

    const [data, setData] = useState([])
    const [header, setHeader] = useState([])

    const getUser = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()

    }, [])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { pathname } = useLocation();

    const path = pathname.split("/")[1]

    //   const [show, setShow] = useState(false);

    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);

    const headerRow = () => {

        if (path === "assets") {
            return AssetsTableHead
        } else if (path === "users") {
            return UsersTableHead
        } else if (path === "finance")
            return FinanceTableHead
    }



    const row = headerRow();
    const body = TableBody()



    return (
        <>

            <div className='table'>
                <table className=''>
                    <thead>
                        <tr>
                            {row.map((item) => <td>{item.name}</td>)}
                            <td> <FontAwesomeIcon icon={faMagnifyingGlass} /></td>
                        </tr>

                    </thead>
                    <tbody>
                        {data.length <= 0 ? (<p>Loading...</p>) : data?.map((item, index) => {
                            return <TableBody id={item?.id} handleOpen={handleOpen} />
                        })

                        }
                    </tbody>
                </table>
            </div>

            <Modal
                // size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={open}
                onHide={handleClose}

            >
                <div className="modal-header py-4   pe-4">
                    <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>

                <div className='d-flex justify-content-center'>

                    <div className='modal-container'>
                        <img src={Trash} alt="trash" style={{
                            width: 50,
                            height: 50
                        }} />
                        <p style={{ color: '#273240', fontWeight: 600, fontSize: 18 }}>Delete Asset</p>
                        <p style={{ color: '#021B33', fontSize: 14, marginTop: 4 }}>Are you sure you want to delete this Asset. This action cannot be undone once preformed.</p>
                    </div>

                </div>
                <div style={{ backgroundColor: '#FAFAFA' }} className='d-flex justify-content-end --b-bottom py-3 px-2 gap-2 align-items-center '>
                    <p style={{ border: '1px solid #ECECEC', padding: '5px 10px', borderRadius: 2 }}>Cancel</p>
                    <p style={{ backgroundColor: '#CA1551', color: '#fff', borderRadius: 2, padding: '5px 10px' }}>Yes, Delete Asset</p>
                </div>
            </Modal>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}

export default Tables