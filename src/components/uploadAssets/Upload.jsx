import React from 'react';
import './Upload.scss'
import { faAngleLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import upload from "../../assets/images/upload.png"
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function Upload() {
    return (
        <>
            <section className='upload-section'>
                <div><Link to="/assets" ><FontAwesomeIcon icon={faAngleLeft} size='lg' /> &nbsp; Assets  &nbsp;  &nbsp; /</Link> <span style={{
                    color: '#021B33', fontSize: '14px', fontWeight: '600',
                    marginLeft: '20px'
                   }}>Upload Asset</span>
                </div>
                <div className='upload-container d-flex flex-column'>
                    <div className="input-row">
                        <div className='upload-item'>
                            <label>Asset Category</label>
                            <input className='upload-item-1' type="text" placeholder='Apartment' />
                        </div>
                        <div className='upload-item'>
                            <label>Apartment Type</label>
                            <input className='upload-item-1' type="text" placeholder='2 bedroom flat' />
                        </div>
                    </div>
                    <div className="input-row ">
                        <div className='upload-item'>
                            <label>Sitting Room </label>
                            <input className='upload-item-2' type="number" />
                        </div>
                        <div className='upload-item'>
                            <label>BedRoom </label>
                            <input className='upload-item-2' type="number" />
                        </div>
                        <div className='upload-item'>
                            <label>Kitchen </label>
                            <input className='upload-item-2' type="number" />
                        </div>
                        <div className='upload-item'>
                            <label>Bathroom </label>
                            <input className='upload-item-2' type="number" />
                        </div>
                        <div className='upload-item'>
                            <label>Toilet </label>
                            <input className='upload-item-2' type="number" />
                        </div>
                        <div className='upload-item'>
                            <label>Parking Space </label>
                            <input className='upload-item-2' type="text" />
                        </div>

                    </div>

                    <div className="input-row">
                        <div className='upload-item'>
                            <label>Location/Address</label>
                            <input className='upload-item-3' type="text" />
                        </div>
                        <div className='upload-item'>
                            <label>Latitude (Optional)  </label>
                            <input className='upload-item-3' type="text" />
                        </div>
                        <div className='upload-item'>
                            <label>Longitude (Optional)  </label>
                            <input className='upload-item-3' type="text" />
                        </div>
                    </div>

                    <div className="input-row-2 align-items-start ">
                        <div className='upload-item'>
                            <label>Payment Per annum</label>
                            <input className='upload-item-4' type="text" />
                        </div>
                        <div className='upload-item'>
                            <label>Agent and agreement amount</label>
                            <input className='upload-item-4' type="text" />
                        </div>
                    </div>

                    <div className="input-row align-items-start flex-column ">
                        <div className='d-flex justify-content-between align-items-end gap-3'>
                            <div className='upload-item '>
                                <label>Upload document</label>
                                <input className='upload-item-5' type="text" placeholder='Tenency file' />
                            </div>
                            <div className='--width-100'>
                                <input className='upload-item-5' type="text" placeholder='Agreement file' />
                            </div>
                            <div className='--width-100'>
                                <input className='upload-item-5' type="text" placeholder='Others' />
                            </div>

                        </div>
                        <p style={{
                            backgroundColor: '#262C55', borderRadius: 6,
                            fontSize: '11px', color: 'white', padding: '5px 10px', marginTop: '20px'
                        }}> <FontAwesomeIcon icon={faPlus} />Add more document</p>
                    </div>

                    <div className="input-row align-items-start flex-column ">

                        <div className='d-flex justify-content-between align-items-end gap-3'>
                            <div className='upload-item'>
                                <label>Payment Per annum</label>
                                <input className='upload-item-4' type="date" />
                            </div>
                            <div className='upload-item'>
                                <label>Agent and agreement amount</label>
                                <input className='upload-item-4' type="time" />
                            </div>

                        </div>
                        <p style={{
                            backgroundColor: '#262C55', borderRadius: 6,
                            fontSize: '11px', color: 'white', padding: '5px 10px', marginTop: '20px'
                        }}> <FontAwesomeIcon icon={faPlus} />Add More</p>
                    </div>
                    <div className=''>
                        <ul className='d-flex justify-content-between mb-4'>
                            <li className="upload-list-items" style={{ backgroundColor: ' #3D79EF', color: '#fff' }}>Front-view</li>
                            <li className="upload-list-items">Video</li>
                            <li className="upload-list-items">Sitting Room</li>
                            <li className="upload-list-items">First Bedroom</li>
                            <li className="upload-list-items">Secont Bedroom</li>
                            <li className="upload-list-items">Kitchen</li>
                            <li className="upload-list-items">First Bathroom & Toilet</li>
                            <li className="upload-list-items">Second Bathroom & Toilet</li>
                            <li className="upload-list-items">Parking Space</li>
                        </ul>
                        <div className='upload-file'>
                            <img src={upload} alt="upload" />
                        </div>
                    </div>
                </div>

                <Link to="/assets/apartment" className='add-asset'>Add Asset</Link>
            </section>
        </>
    )
}

export default Upload