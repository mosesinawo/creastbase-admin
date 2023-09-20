import React from 'react';
import './Modal.scss';
import { Modal } from 'react-bootstrap';

const SearchAsset = ({ open, handleClose }) => {
    return (
        <Modal
            // size="lg"
            // aria-labelledby="contained-modal-title-vcenter"
            centered
            show={open}
            onHide={handleClose}

        >
            <div className="modal-header py-4   pe-4">
                <h6 className='--family-2 text-darkblue --weight text-center --width-100'>Search for assets</h6>
                <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div className='adduser-container'>
                <form className='  d-flex flex-column align-items-center gap-4 py-4' >
                    <div className='--width-100 --flex-center'>
                        <input type="text" className='adduser-input' placeholder='Enter location' />
                    </div>
                    <input type="text" className='adduser-input' placeholder='Category' />
                    <input type="text" className='adduser-input' placeholder='Size' />
                    <input type="text" className='adduser-input' placeholder='Minimum Price' />
                    <input type="text" className='adduser-input' placeholder='Maximum Price' />
                    <button className='adduser-btn' type='submit'>Search</button>
                </form>
            </div>


        </Modal>
    )
}

export default SearchAsset