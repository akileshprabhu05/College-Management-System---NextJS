import Announcements from '@/Components/Announcements'
import BigCalendar from '@/Components/BigCalendar'
import EventCalendar from '@/Components/EventCalendar'
import React from 'react'

const StudentPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 xl:flex-row'>
      <div className='w-full xl:w-2/3'>
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule (IT-A)</h1>
          <BigCalendar/>
        </div>
      </div>

      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default StudentPage