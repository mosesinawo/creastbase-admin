import React, { useEffect, useState } from 'react'
import "./Tables.scss";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faCircleXmark, faEllipsisVertical, faFileCircleXmark, faMagnifyingGlass, faUserPen } from '@fortawesome/free-solid-svg-icons'
import AssetsTableHead from '../../assets/data/AssetsTableHead';
import { Link, useLocation } from 'react-router-dom';
import UsersTableHead from '../../assets/data/UsersTableHead';
import FinanceTableHead from '../../assets/data/FinanceTableHead';
import viewProfile from '../../assets/images/asset-profile.png'
import TableBody from './TableBody';

import { Button, Modal } from 'react-bootstrap';
import DeleteModal from '../modals/DeleteModal';
import AddUserModal from '../modals/AddUserModal';
import SearchAsset from '../modals/SearchModal';
import UnListModal from '../modals/UnListModal';
import ReactPaginate from 'react-paginate';

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
    const [search, setSearch] = React.useState(false);
    const [handleList, sethandleList] = React.useState(false);
    const handleOpenlist = () => sethandleList(true)
    const handleCloselist = () => sethandleList(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenSearch = () => setSearch(true)
    const handleCloseSearch = () => setSearch(false)


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

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };



    return (
        <>

            <div className='table'>
                <table className=''>
                    <thead>
                        <tr>
                            {row.map((item) => <td>{item.name}</td>)}
                            <td> <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleOpenSearch} /></td>
                        </tr>

                    </thead>
                    <tbody>
                        {currentItems.length <= 0 ? (<p>Loading...</p>) : data?.map((item, index) => {
                            return <TableBody id={item?.id} handleOpen={handleOpen}
                                handleOpenlist={handleOpenlist}
                            />
                        })

                        }
                    </tbody>
                </table>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName='page-num'
                previousLinkClassName='page-prev'
                nextLinkClassName='page-prev'
                disabledClassName= 'page-disabled'
                activeLinkClassName='active'
            />
            <DeleteModal open={open} handleClose={handleClose} />
            <SearchAsset open={search} handleClose={handleCloseSearch} />
            <UnListModal open={handleList} handleClose={handleCloselist} />

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