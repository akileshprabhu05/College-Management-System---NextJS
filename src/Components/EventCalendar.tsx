"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
      id: 1,
      title: "Problem Solving",
      time: "1:30 PM - 2:30 PM",
      description: "To attend this test must be completed lvl 3.",
    },
    {
      id: 2,
      title: "Kalam - Dance Event",
      time: "12:00 PM - 3:00 PM",
      description: "Registered teams should be report on the time.",
    },
    {
      id: 3,
      title: "EE",
      time: "9:00 AM - 3:30 PM",
      description: "Ready with your 5th semester EE project.",
    },
  ];
  
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold my-4 '>Event</h1>
            <Image src="/moreDark.png" alt="dot" width={20} height={20} />
        </div>
        <div className='flex flex-col gap-4'>
            {events.map(event=>(
                <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-xs text-gray-300'>{event.time}</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-2'>{event.description}</p>
                </div>
            ))}

        </div>
    </div>

  )
}

export default EventCalendar