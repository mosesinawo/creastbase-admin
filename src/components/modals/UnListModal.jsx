import React from 'react'
import { Modal } from 'react-bootstrap'
import unlist from "../../assets/images/unlist.png";

const UnListModal = ({ open, handleClose }) => {
    return (
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
                    <img src={unlist} alt="trash" style={{
                        width: 50,
                        height: 50,
                        marginBottom:20
                    }} />
                    <p style={{ color: '#273240', fontWeight: 600, fontSize: 18 }}>Unlist Asset</p>
                    <p style={{ color: '#021B33', fontSize: 14, marginTop: 4 }}>
                        Are you sure you want to unlist this <span style={{ color: '#CA1551', fontWeight: '700' }}>Asset</span>. Yes, i want to unlist this asset
                    </p>
                </div>

            </div>
            <div style={{ backgroundColor: '#FAFAFA' }} className='d-flex justify-content-end --b-bottom py-3 px-2 gap-2 align-items-center '>
                <p onClick={handleClose} style={{ border: '1px solid #ECECEC', padding: '5px 10px', borderRadius: 2, cursor:'pointer' }}>Cancel</p>
                <p  style={{ backgroundColor: '#CA1551', color: '#fff', borderRadius: 2, padding: '5px 10px', cursor: 'pointer' }}>Yes, Delete Asset</p>
            </div>
        </Modal>
    )
}

export default UnListModal