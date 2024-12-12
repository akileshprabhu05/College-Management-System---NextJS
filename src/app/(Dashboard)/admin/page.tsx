import Announcements from '@/Components/Announcements'
import AttendanceChartContainer from '@/Components/AttendanceChartContainer'
import CountChartContainer from '@/Components/CountChartContainer'
import EventCalendarContainer from '@/Components/EventCalendarContainer'
import FinanceChart from '@/Components/FinanceChart'
import UserCard from '@/Components/UserCard'
import React from 'react'

const AdminPage = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type="admin"/>
          <UserCard type="teacher"/>
          <UserCard type="student"/>
          <UserCard type="parent"/>
        </div>

        <div className='flex gap-4 flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChartContainer/>
          </div>
          
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChartContainer/>
          </div>
        </div>
        <div className='w-full h-[500px]'>
          <FinanceChart/>
        </div>
      </div>

      <div className='w-full lg:w-1/3 flex flex-col gap-8 '>
        <EventCalendarContainer searchParams={searchParams}/>
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage