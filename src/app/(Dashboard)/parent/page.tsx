import Announcements from '@/Components/Announcements'
import BigCalendar from '@/Components/BigCalendar'
import React from 'react'

const ParentPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 xl:flex-row'>
      <div className='w-full xl:w-2/3'>
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule (Keera)</h1>
          <BigCalendar/>
        </div>
      </div>

      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <Announcements/>
      </div>
    </div>
  )
}

export default ParentPage