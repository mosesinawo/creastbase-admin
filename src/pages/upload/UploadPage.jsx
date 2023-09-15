import React from 'react'
import Upload from '../../components/uploadAssets/Upload'
import Sidebar from '../../components/sidebar/Sidebar'

const UploadPage = () => {
  return (
    <div className='homepage'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">

       <Upload/>

      </div>
    </div>
  )
}

export default UploadPage