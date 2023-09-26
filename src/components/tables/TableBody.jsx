import styled from "@emotion/styled";
import { faEllipsisVertical, faTrashCan, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


const TableBody = (props) => {

    const [option, setOption] = useState(false)


    const id = props?.id
    const showModal = props?.handleOpen
    const handleOpenlist = props?.handleOpenlist

    const { pathname } = useLocation();
    const path = pathname.split("/")[1]

    const showData = (selected) => {
        if (id === selected) {
            setOption(!option)
        }
    }

    const label = { inputProps: { 'aria-label': 'Size switch demo' } };

    if (path === "assets") {
        return (<tr>
            <td>2 Bedroom Flat</td>
            <td>4, oladele str, berger, Lagos...</td>
            <td>Mr Bright</td>
            <td>07054624163</td>
            <td>NGN750,000</td>
            <td className={option ? "showOption" : "hideOption"} > <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => showData(id)} />
                <div className={option ? "table-tooltip" : "hide-tooltip"}>
                    <Link to="/assets/apartment" className="d-flex align-items-center py-3 px-2"> <FontAwesomeIcon icon={faUserPen} style={{ color: '#3C91E6' }} /><p className="table-tooltip-info">View All Details</p> </Link>
                    <div onClick={showModal} className="d-flex align-items-center py-2 px-2 --b-bottom --b-top"><FontAwesomeIcon icon={faTrashCan} style={{ color: '#CA1551' }} /> <p className="table-tooltip-delete">Delete Asset</p></div>
                    <div className="d-flex align-items-center py-1 px-2">  <Switch {...label} color="primary" defaultChecked onClick={handleOpenlist} /> &nbsp; <p>Unlist Asset</p></div>
                </div>
            </td>
        </tr>)
    } else if (path === "users") {
        return (<tr>
            <td>Adekunle Williams</td>
            <td>Adekunlewilliams@gmail.com</td>
            <td>07054624163</td>
            <td>5</td>
            <td className={option ? "showOption" : "hideOption"} > <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => showData(id)} />
                <div className={option ? "table-tooltip" : "hide-tooltip"}>
                    <Link to="/assets/userinfo" className="d-flex align-items-center py-3 px-2"> <FontAwesomeIcon icon={faUserPen} style={{ color: '#3C91E6' }} /><p className="table-tooltip-info">Profile</p> </Link>
                    <div onClick={showModal} className="d-flex align-items-center py-2 px-2 --b-bottom --b-top"><FontAwesomeIcon icon={faTrashCan} style={{ color: '#CA1551' }} /> <p className="table-tooltip-delete">Delete</p></div>
                    <div className="d-flex align-items-center py-1 px-2">  <Switch {...label} color="primary" defaultChecked /> &nbsp; <p>Deactivate</p></div>
                </div>
            </td>
        </tr>)
    } else if (path === "finance")
        return (<tr>
            <td>bronze</td>
            <td>N3,000</td>
            <td>4</td>
            <td>3,056</td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
        </tr>)
}

export default TableBody