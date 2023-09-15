import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const AssetItem = () => {
    return (
        <div className='d-flex align-items-center gap-2 asset-item'>
            <FontAwesomeIcon icon={faCircleUser} size="lg" style={{ color: '#D5D9E7' }} />
            <p style={{ color: '#021B33' }}>The Annex, Lekki Beach</p>
            <p style={{ color: '#021B33' }} className='view-btn'>23 Views</p>
        </div>
    )
}

const AssetsView = () => {
    return (
        <div className='asset-view'>
            <p style={{ color: '#021B33' }}>Recently Boosted Assets</p>
            <AssetItem />
            <AssetItem />
            <AssetItem />
            <AssetItem />

            <div className='--flex-center mt-2'>

                <Link
                    style={{
                        border: "1px solid #8C8C8C", padding: "2px 20px",
                        borderRadius: 1, textAlign: 'center', width: 'max-content'
                    }} to="/assets">View All</Link>
            </div>

        </div>
    )
}

export default AssetsView