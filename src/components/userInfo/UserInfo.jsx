import { faAngleLeft, faPencil, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import user from "../../assets/images/user-profile.png"
import pen from "../../assets/images/pen.svg"
import call from "../../assets/images/call.svg"
import twitter from "../../assets/images/twitter.svg"
import insta from "../../assets/images/insta.svg"
import "./UserInfo.scss";
import Navbar from '../navbar/Navbar';
import Tables from '../tables/Tables'
import { Link, useLocation } from 'react-router-dom'
import TableTab from '../tables/TableTab'

const UserInfo = () => {

    const { pathname } = useLocation();

    const path = pathname.split("/")[1]

    console.log(path)
    return (<>
        <Navbar />
        <div className='userInfo --relative'>
            <div className='d-flex justify-content-between userInfo-top '>
                <Link to='/users'>
                <p style={{ color: 'white', fontWeight: '700', fontSize: 18 }}>  <FontAwesomeIcon icon={faAngleLeft} size='xs' /> &nbsp; Profile Info</p>
                </Link>
                <img src={pen} alt="pen" style={{ width: 36, height: 36 }} />
            </div>
            <div className='d-flex justify-content-between align-items-center userInfo-info '>
                <img src={user} alt="user" />
                <p className='userInfo-edit'>Edit Profile</p>
            </div>
        </div>
        <section>
            <div className='d-flex justify-content-between mt-4'>
                <div className='d-flex flex-column align-items-start'>
                    <h5 style={{
                        fontFamily: 'Merriweather', fontWeight: '900',
                        fontSize: 20, paddingBottom: 10
                    }}>Olumide Williams</h5>
                    <p style={{ color: ' #262C55' }} className='d-flex align-items-center gap-2 mt-2'>Realtor <i style={{ color: '#011B3399', fontSize: 5 }} class="fas fa-circle"></i> 5 Years Experience</p>
                    <p className='d-flex align-items-center gap-2 mt-2'>Victoria Island, Lagos, Nigeria <i style={{ color: '#011B3399', fontSize: 5 }} class="fas fa-circle"></i>  <span
                        style={{ color: '#407AEE', fontWeight: '600' }}>Contact Info</span></p>
                </div>
                <div className='d-flex gap-3'>
                    <img src={call} alt="call" />
                    <img src={insta} alt="insta" />
                    <img src={twitter} alt="tweeter" />
                </div>
            </div>

            <div className='mt-4 userInfo-details --b-top --b-bottom '>
                <h5 style={{
                    fontFamily: 'Merriweather', fontWeight: '700',
                    fontSize: 17, paddingBottom: 10
                }}>Professional Summary</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident </p>
            </div>
            <div>
                <h5 style={{
                    fontFamily: 'Merriweather', fontWeight: '700',
                    fontSize: 17, paddingBottom: 10, paddingTop:30
                }}>Assets</h5>
                <TableTab  />
                <Tables />
            </div>
        </section>
    </>
    )
}

export default UserInfo