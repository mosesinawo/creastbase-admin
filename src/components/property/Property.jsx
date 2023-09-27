import React from 'react'
import { faAngleLeft, faCircle, faCircleMinus, faLocationDot, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pty1 from "../../assets/images/pty-1.png"
import pty2 from "../../assets/images/pty-2.png"
import pty3 from "../../assets/images/pty-3.png"
import pics from "../../assets/images/pics.png"
import twitter from "../../assets/images/twitter.svg"
import whatsapp from "../../assets/images/whatsapp-icon.svg"
import insta from "../../assets/images/insta.svg"
import agent from "../../assets/images/agent.svg"
import tenancy from "../../assets/images/tenancy.svg"
import agreement from "../../assets/images/agreement.svg"
import call from "../../assets/images/call.svg"
import { Link } from 'react-router-dom'
// import "./Apartment.scss"
import DeleteModal from '../modals/DeleteModal'
import UnListModal from '../modals/UnListModal'
import { ArrowRight2, Edit2, Location, MinusCirlce, MoreCircle, Trash } from 'iconsax-react'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const Property = () => {

    const [open, setOpen] = React.useState(false);
    const [handleList, sethandleList] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenlist = () => sethandleList(true)
    const handleCloselist = () => sethandleList(false)
    return (<>
        <section >
            <div style={{ marginBottom: '20px' }}><Link to="/assets" ><FontAwesomeIcon icon={faAngleLeft} size='lg' /> &nbsp; Assets  &nbsp;  &nbsp; /</Link> <span style={{
                color: '#021B33', fontSize: '14px', fontWeight: '600',
                marginLeft: '20px'
            }}> Property</span>
            </div>
            <div className=''>
                <div className='d-flex gap-3 '>
                    <div className='--relative apt-imageContainer1'>
                        <img src={pty1} alt="apt1" className='apt-img-1  ' />
                        <p className='apt-imgTag'>Front-view</p>
                        <p className='apt-imgTag-arrow --flex-center'><ArrowRight2 size="32" color="#262C55" /></p>
                    </div>
                    <div className='d-flex flex-column gap-3 apt2-imageContainer2'>
                        <div className='--relative'>
                            <img src={pty2} alt="apt2" className='apt-img-2' />
                            <p className='apt-imgTag'>Sitting Room</p>
                        </div>
                        <div className='--relative'>
                            <img src={pty3} alt="apt3" className='apt-img-2' />
                            <p className='apt-imgTag'>Aerial View</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-4'>
                    <div className='d-flex gap-4'>
                        <p style={{ color: '#262C55', fontSize: 20, fontWeight: '700' }}>4 Bedroom Terraced House</p>
                        <p className='apt-btn' style={{ color: '#35A162', borderColor: '#35A162' }}>Geo-locate</p>
                        <p className='apt-btn' style={{
                            borderColor: '#011B332E', fontSize: 12, color: 'black'
                        }}>Ref No: RNTA001</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <p onClick={handleOpenlist} style={{ backgroundColor: '#262C551A', color: '#262C55', cursor: 'pointer' }} className='apt-btn'>  <MinusCirlce size="20" /> &nbsp;Unlist Asset</p>
                        <p onClick={handleOpenlist} style={{ backgroundColor: '#3D79EF1A', color: '#3D79EF', cursor: 'pointer' }} className='apt-btn'>  <Edit2 size="20" /> &nbsp;Edit Asset</p>
                        <p onClick={handleOpen} style={{ color: '#D13852', backgroundColor: '#D138521A', cursor: 'pointer' }} className='apt-btn'> <Trash size="20" />&nbsp; Delete Asset</p>
                    </div>
                </div>
                <p style={{ color: 'black', marginTop: 12 }}><Location size="18" color="#35A162" /> 16, Olusola Str, Surulere Lagos.</p>
                <div className='d-flex mt-4 gap-3 align-items-center'>
                    <p className='apt-price'>&#8358;70,000,000 <span className='apt-price-tag'>P.a</span></p>
                    <MoreCircle size="5" color="#011B3366" variant="Bold" />
                    <p className='apt-price'>&#8358;5,000,000 <span className='apt-price-tag'>Total Package</span></p>
                </div>

                <div className='apt-desc'>
                    <h5 style={{
                        fontWeight: '700',
                        padding: '10px 25px', fontSize: 16, borderBottom: '1.5px solid #ECECEC', paddingBottom: 10
                    }}>Description</h5>
                    <p className='apt-text' style={{ padding: '20px 25px' }}>Note that this money will not be transferred to the apartment owner until you
                        confirm that you have also verify and satisfied with the apartment. Note that
                        this money will not be transferred to the apartment owner until
                        you confirm that you have also verify and satisfied with the apartment. Note that
                        this money will not be transferred to the apartment owner until you confirm that you
                        have also verify and satisfied with the apartment. Note that this money will not be
                        transferred to the apartment owner until you confirm that you have also verify and
                        satisfied with the apartment. Note that this money will not be transferred to the
                        apartment owner until you confirm that you have also verify and satisfied with the apartment. Note that this
                        money will not be transferred to the apartment owner until you confirm that you have also verify and satisfied with the apartment.</p>
                </div>

                <div className='apt-details d-flex'>
                    <div className='apt-details-left' style={{ width: '40%' }}>
                        <h5 style={{
                            fontFamily: 'Merriweather', fontWeight: '700',
                            padding: '0 20px', fontSize: 16, borderBottom: '1.5px solid #ECECEC', paddingBottom: 10
                        }}>Features</h5>
                        <div className='d-flex flex-column px-4'>
                            <div className='d-flex justify-content-between mt-2'>
                                <div style={{ width: '150px' }} className='d-flex justify-content-between '>
                                    <p style={{ color: '#262C55', fontSize: 14 }}>Bedroom:
                                    </p>
                                    <span style={{ fontWeight: '600' }} >2</span>
                                </div>
                                <div style={{ width: '150px' }} className='d-flex justify-content-between '>
                                    <p style={{ color: '#262C55', fontSize: 14 }}>Toilet & Bathroom:
                                    </p>
                                    <span style={{ fontWeight: '600' }} >2</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-4">

                                <div style={{ width: '150px' }} className='d-flex justify-content-between '>
                                    <p style={{ color: '#262C55', fontSize: 14 }}>Kitchen:
                                    </p>
                                    <span style={{ fontWeight: '600' }} >1</span>
                                </div>
                                <div style={{ width: '150px' }} className='d-flex justify-content-between '>
                                    <p style={{ color: '#262C55', fontSize: 14 }}>General parking space
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-4">

                                <div style={{ width: '150px' }} className='d-flex justify-content-between '>
                                    <p style={{ color: '#262C55', fontSize: 14 }}>Good road network
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="apt-details-right " style={{ width: '60%', borderLeft: '1px solid #262C5524 ' }}>
                        <div className='d-flex justify-content-between px-4'>
                            <div className='d-flex align-items-center gap-1'>
                                <img src={pics} alt="pics" />
                                <div className='d-flex flex-column'>
                                    <h5 style={{ fontSize: 14, fontWeight: '600' }}>Pelumi Williams <span style={{
                                        color: '#35A162',
                                        fontSize: 10, fontWeight: '500'
                                    }}><FontAwesomeIcon icon={faCircleCheck} size="sm" /> Verified</span></h5>
                                    <span style={{ color: '#262C558A' }}>Agent</span>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <img src={call} alt="call" />
                                <img src={whatsapp} alt="whatspp" />
                                <img src={insta} alt="insta" />
                                <img src={twitter} alt="twitter" />
                            </div>
                        </div>
                        <p className='apt-text mt-3 px-4' >Note that this money will not be transferred to
                            the apartment owner until you confirm that
                            you have also verify and satisfied with the apartment.
                        </p>
                        <div className='d-flex gap-4 --b-top --b-bottom py-3 px-4 mt-4'>
                            <p style={{ color: '#3D79EF', fontWeight: '400' }}>Pelumiwilliams@gmail.com</p>
                            <p style={{ color: '#262C55' }}>07054624163</p>
                        </div>

                        <div className='mt-4 px-4'>
                            <h5 style={{
                                fontWeight: '700',
                                fontSize: 16, paddingBottom: 10
                            }}>Inspection Schedule</h5>

                            <div className='d-flex gap-4 mt-4'>
                                <p className='apt-text'>Tuesdays: <span style={{ color: '#3D79EF', fontWeight: '600' }}>10am</span></p>
                                <div style={{ backgroundColor: '#262C5599', width: 1.2, height: 15 }}></div>
                                <p className='apt-text'>Thursdays: <span style={{ color: '#3D79EF', fontWeight: '600' }}>10am</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h4 style={{
                    fontFamily: 'Merriweather', fontWeight: '900',
                    padding: '0 20px', fontSize: 16, paddingBottom: 10
                }}>Documents</h4>

                <div className='d-flex mt-2'>
                    <img src={tenancy} alt="tenency" />
                    <img src={agreement} alt="agreement" />
                    <img src={agent} alt="agent" />
                </div>
            </div>
        </section>
        <DeleteModal open={open} handleClose={handleClose} />
        <UnListModal open={handleList} handleClose={handleCloselist} />
    </>
    )
}

export default Property