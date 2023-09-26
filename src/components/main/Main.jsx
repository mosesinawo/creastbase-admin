import React from 'react'
import Navbar from '../navbar/Navbar'
import Assets from '../assets/Assets'
import { useLocation } from 'react-router-dom'
import Users from '../users/User'
import Finance from '../finance/Finance'
import Dashboard from '../dashboard/Dashboard'


const Main = () => {
  const { pathname } = useLocation();
  const location  = useLocation();

  const path = pathname.split("/")[1]

  console.log(pathname)
  console.log(location)


  const Section = () => {
    if (path === undefined) {
      return (<Dashboard />)
    } else if (path === "assets") {
      return (<Assets />)
    } else if (path === "users") {
      return (<Users />)
    } else if (path === "finance"){
      return (<Finance />)
    }else{
      return (<Dashboard />)
    }
  }

  const section = Section()

  return (
    <div className=''>
      {section}
    </div>
  )
}

export default Main