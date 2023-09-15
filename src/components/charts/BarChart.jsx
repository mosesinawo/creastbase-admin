import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Barchart = () => {

    const data = [
        {
            "name": "01",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "02",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "03",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "04",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "05",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "06",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "07",
            "uv": 3490,
            "pv": 4300
        },
        {
            "name": "08",
            "uv": 3490,
            "pv": 4300
        },
        {
            "name": "09",
            "uv": 3490,
            "pv": 4300
        },
        {
            "name": "10",
            "uv": 3490,
            "pv": 4300
        },
        {
            "name": "11",
            "uv": 3490,
            "pv": 4300
        },
        {
            "name": "12",
            "uv": 3490,
            "pv": 4300
        },
    ]

    return (
        <div>
         
            <BarChart width={650} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E7E7" />
                <XAxis dataKey="name" tick={{ fill: '#737B8B', fontSize: 11 }} />
              
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#F1A5C2" barSize={9} />
                <Bar dataKey="uv" fill="#E6E8EC" barSize={9}/>
            </BarChart>
           
        </div>
    )
}

export default Barchart