import React from 'react'
import Apartment from '../../components/apartment/Apartment'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const ApartmentDetails = () => {
  return (
    <div className='homepage'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Apartment />
      </div>
    </div>
  )
}

export default ApartmentDetails