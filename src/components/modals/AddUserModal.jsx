import React from 'react';
import './Modal.scss';
import { Modal } from 'react-bootstrap';

const AddUserModal = ({ openUserModal, handleCloseUserModal }) => {
    return (
        <Modal
            // size="lg"
            // aria-labelledby="contained-modal-title-vcenter"
            centered
            show={openUserModal}
            onHide={handleCloseUserModal}

        >
            <div className="modal-header py-4   pe-4">
                <h6 className='--family-2 text-darkblue --weight text-center --width-100'>Add New User</h6>
                <button type="button" onClick={handleCloseUserModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div className='adduser-container'>
                <form className='  d-flex flex-column align-items-center gap-4 py-4' >
                    <div className='--width-90 --flex-start --dir-column '>
                        <label>First Name</label>
                        <input type="text" className='adduser-input-2' />
                    </div>
                    <div className='--width-90 --flex-start --dir-column '>
                        <label>Last Name</label>
                        <input type="text" className='adduser-input-2' />
                    </div>
                    <div className='--width-90 --flex-start --dir-column '>
                        <label>Email</label>
                        <input type="email" className='adduser-input-2' />
                    </div>
                    <div className='--width-90 --flex-start --dir-column '>
                        <label>User Type</label>
                        <select className='adduser-input-2'>
                            <option value=""></option>
                            <option value="">User</option>
                            <option value="">Realtor/Agent</option>
                            <option value="">Real Estate Company</option>
                            <option value="">Event Hall Company</option>
                        </select>
                    </div>
                    <button className='adduser-btn' type='submit'>Add User</button>
                </form>
            </div>


        </Modal>
    )
}

export default AddUserModal