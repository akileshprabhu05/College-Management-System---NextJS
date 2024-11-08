"use client"
import Image from 'next/image'
import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 2210,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 2290,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 2000,
  },
  {
    name: 'May',
    income: 1890,
    expense: 2181,
  },
  {
    name: 'June',
    income: 2390,
    expense: 2500,
  },
  {
    name: 'July',
    income: 3490,
    expense: 2100,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 2100,
  },
  {
    name: 'Sep',
    income: 3490,   
    expense: 2100,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    income: 4300,
    expense: 2100,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 2100,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-lg w-full h-full p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={90} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis axisLine={false} dataKey="name" tick={{ fill: "#d1d5db" }}
            tickLine={false} tickMargin={10}/>
          
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }}
            tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={3} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
      </div>
  )
}

export default FinanceChart