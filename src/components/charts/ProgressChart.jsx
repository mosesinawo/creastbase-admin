import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressChart.css';

const ProgressChart = () => {
    return (
        <div className='d-flex flex-column gap-3 align-items-center progress-chart'>
            <div className='chart-circle'>
                <CircularProgressbarWithChildren value={66} strokeWidth={6}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `#3D79EF99`,
                        textColor: '#f88',
                        trailColor: '#F1A5C2',
                        backgroundColor: '#000',
                    })}
                >

                    <div style={{ marginTop: -5, textAlign: 'center' }}>
                        <p style={{ fontSize: 20, color: '#505D6F', fontWeight: '600' }}>1,925</p>
                        <p style={{ fontSize: 12, color: "#9AA1A9" }}>Subscriptions</p>
                    </div>
                </CircularProgressbarWithChildren>;
            </div>
            <div className="d-flex justify-content-between gap-3 ">
                <p>Assets Boost</p>
                <p>Subscriptions</p>
            </div>

            <div className='d-flex flex-column text-center progress-chart-bottom'>
                <span style={{ fontWeight: '600' }}>3,563,4567</ span>
                <span >Revenue generated</span>
                <span style={{ color: '#8C8C8C' }}>from 1-12 March 2023</span>
            </div>
        </div>
    )
}

export default ProgressChart