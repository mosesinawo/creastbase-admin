
import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

const Linechart = () => {

    const data = [
        {
            "name": "1",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "02",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "03",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "04",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "05",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "06",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
   
    ]

    return (
        <ResponsiveContainer  width="100%" height={250} >
            <LineChart  data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E7E7" />
                <XAxis dataKey="name" tick={{ fill: '#737B8B', fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#3C91E6" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
        // width={300} height={250}
    )
}

export default Linechart



