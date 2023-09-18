import React, { useEffect, useState } from 'react'
import "./Tables.scss";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faMagnifyingGlass, faUserPen } from '@fortawesome/free-solid-svg-icons'
import AssetsTableHead from '../../assets/data/AssetsTableHead';
import { Link, useLocation } from 'react-router-dom';
import UsersTableHead from '../../assets/data/UsersTableHead';
import FinanceTableHead from '../../assets/data/FinanceTableHead';
import viewProfile from '../../assets/images/asset-profile.png'

const Tables = () => {

    const [data, setData] = useState([])
    const [header, setHeader] = useState([])

    const getUser = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()

    }, [])
    const { pathname } = useLocation();

    const path = pathname.split("/")[1]



    const headerRow = () => {

        if (path === "assets") {
            return AssetsTableHead
        } else if (path === "users") {
            return UsersTableHead
        } else if (path === "finance")
            return FinanceTableHead
    }
    const tableBody = () => {

        if (path === "assets") {
            return <tr>
                <td>2 Bedroom Flat</td>
                <td>4, oladele str, berger, Lagos...</td>
                <td>Mr Bright</td>
                <td>07054624163</td>
                <td>NGN750,000</td>
                <td><Link to="/assets/apartment"><FontAwesomeIcon icon={faEllipsisVertical} /></Link></td>
            </tr>
        } else if (path === "users") {
            return <tr>
                <td>Adekunle Williams</td>
                <td>Adekunlewilliams@gmail.com</td>
                <td>07054624163</td>
                <td>5</td>
                <td><Link to="/assets/userinfo"> <FontAwesomeIcon icon={faEllipsisVertical} /></Link></td>
            </tr>
        } else if (path === "finance")
            return <tr>
                <td>bronze</td>
                <td>N3,000</td>
                <td>4</td>
                <td>3,056</td>
                <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
            </tr>
    }


    const row = headerRow();
    const body = tableBody()


    return (
        <div className='table'>
            <table className=''>
                <thead>
                    <tr>
                        {row.map((item) => <td>{item.name}</td>)}
                        <td> <FontAwesomeIcon icon={faMagnifyingGlass} /></td>
                    </tr>

                </thead>
                <tbody>
                    {data.length <= 0 ? (<p>Loading...</p>) : data.map((item) => {
                        return body
                    })

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tables