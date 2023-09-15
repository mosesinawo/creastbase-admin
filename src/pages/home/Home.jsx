import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import "./Home.css";

const Home = () => {

  const [showNav, setShowNav] = useState(false)

  const hideNav = () => {
    setShowNav(true)
    console.log(showNav)
  }

  return (
    <div className='homepage relative'>
      <div className={showNav ? ' sidebar' : 'sidebarHide'}>
        <Sidebar setshownav={hideNav} shownav={showNav} />
      </div>
      <div className={showNav ? 'main' : 'mainFull'}>
        <Main />

      </div>
    </div>
  )
}

export default Home