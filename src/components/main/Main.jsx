import React from 'react'
import Navbar from '../navbar/Navbar'
import Assets from '../assets/Assets'
import { useLocation } from 'react-router-dom'
import Users from '../users/User'
import Finance from '../finance/Finance'
import Dashboard from '../dashboard/Dashboard'


const Main = () => {
  const { pathname } = useLocation();

  const path = pathname.split("/")[1]

  console.log(path)

  const Section = () => {
    if (path === "") {
      return (<Dashboard />)
    } else if (path === "assets") {
      return (<Assets />)
    } else if (path === "users") {
      return (<Users />)
    } else if (path === "finance")
      return (<Finance />)
  }

  const section = Section()

  return (
    <div className=''>
      <Navbar />
      {section}
    </div>
  )
}

export default Main