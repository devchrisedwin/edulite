import React from 'react'

function Dashboard() {
  return (
    <div className='border flex'>
        <div className='flex-1 min-h-[100vh] border border-blue-700'>sidebar</div>
        <div className='flex-4 min-h-[100vh] border border-green-800'>main section</div>
    </div>
  )
}

export default Dashboard