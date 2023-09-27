import React from 'react';
import bell from "../../assets/images/bell.svg"
import avatar from "../../assets/images/avatar.svg"
import pointer from "../../assets/images/pointer.svg"
import dropdown from "../../assets/images/dropdown.svg"
import logo from "../../assets/images/logo.svg"
import "./Navbar.scss";
import { useLocation } from 'react-router-dom';
import { DocumentText, HambergerMenu, Layer, Profile2User, StatusUp } from 'iconsax-react';

const Navbar = (props) => {

    const { pathname } = useLocation();
    console.log(props)
const showIcon = props.showNav
    const path = pathname.split("/")[1]
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const _path = capitalizeFirstLetter(path)

    const icon = () => {

        if (path === "assets") {
            return  <DocumentText size="25"/>
        } else if (path === "users") {
            return <Profile2User size="25"/>
        } else if (path === "finance") {
            return <Layer size="25"/>
        } else {
            return <StatusUp size="25"/>
        }
    }
    const image = icon();


    return (
        <div className='navbar --flex-between'>
            <div className='--flex-start gap-3' >
              { !showIcon&& <img src={pointer} alt="pointer"  className='navbar-arrow' onClick={props.hideNav}/>}
              {showIcon &&<HambergerMenu size="32"  color="#262C55"onClick={props.hideNav} className='navbar-bar'/>}
              <img className='navbar-logo' src={logo} alt="" />
            <p className='navbar-section' style={{color:'#262C55', fontSize:16}} > {image} &nbsp; {_path || "Dashboard"}</p>
            </div>
            <div className='navbar-right d-flex justify-content-center align-items-center  gap-2 '>
                <img src={bell} alt="bell" />
                <div className=' align-items-center gap-2 navbar-avatar'>
                    <img src={avatar} alt="avatar" />
                    <p>Bright Coker</p>
                    <img src={dropdown} alt="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Navbar