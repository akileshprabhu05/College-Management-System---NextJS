"use client"
import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 104,
    fill: 'White',
  },
  {
    name: 'Girls',
    count: 40,
    fill: '#8884d8',
  },
  {
    name: 'Boys',
    count: 60,
    fill: '#83a6ed',
  },
];



const CountChart = () => {
  return (
    <div className='bg-white rounded-lg w-full h-full p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className='w-full h-[75%]'>
      <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
      </div>

      <div className='flex justify-center gap-16'>
       <div>
        <div className='w-5 h-5 bg-lamaSky rounded-full'/>
        <h1 className='font-bold '>2,871</h1>
        <h2 className='text-xm text-gray-500'>Boys (55%)</h2>
       </div>
       <div>
        <div className='w-5 h-5 bg-lamaSky rounded-full'/>
        <h1 className='font-bold '>1,290</h1>
        <h2 className='text-xm text-gray-500'>Girls (45%)</h2>
       </div>
      </div>
    </div>
  )
}

export default CountChart