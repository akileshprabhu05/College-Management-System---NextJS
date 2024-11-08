import React from 'react'

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Announcement</h1>
            <span className='text-xs text-gray-400'>show all</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'></div>
        <div className='bg-lamaSkyLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='font-medium'>New Principal</h1>
                <span className='text-sm text-gray-400 bg-white rounded-md px-1 py-1'>8-10-2024</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>The New Principal marks the arrival of a new head of the institution, bringing fresh leadership and vision. This change often brings new initiatives, policies, and improvements aimed at enhancing the academic and overall college environment.</p>
        </div>
        <div className='flex flex-col gap-4 mt-4'></div>
        <div className='bg-lamaPurpleLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='font-medium'>Revaluation Form Last Date</h1>
                <span className='text-sm text-gray-400 bg-white rounded-md px-1 py-1'>14-11-2024</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>The Revaluation Form Last Date is the final deadline for students to request a re-evaluation of their exam papers. Submissions after this date are not accepted, so students should apply promptly.</p>
        </div>
        <div className='flex flex-col gap-4 mt-4'></div>
        <div className='bg-lamaYellowLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='font-medium'>Project Review</h1>
                <span className='text-sm text-gray-400 bg-white rounded-md px-1 py-1'>9-11-2024</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'> All students are requested to prepare for the upcoming project review session. Please ensure your presentations and documents are complete and ready for evaluation. Further details will be shared soon.</p>
        </div>
    </div>
  )
}

export default Announcements