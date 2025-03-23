import React from 'react';
import DashboardStdHome from './DashboardStdHome';
import DashboardTHome from './DashboardTHome';

function DashboardHome() {
  const userRole = 'teacher';

  return (
    <div className='p-4'>
        {userRole === 'student' ? <DashboardStdHome/> : <DashboardTHome/>}
    </div>
  );
}

export default DashboardHome;