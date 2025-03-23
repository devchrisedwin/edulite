import React, {useContext} from 'react';
import DashboardStdHome from './DashboardStdHome';
import DashboardTHome from './DashboardTHome';
import { UserContext } from '../context/UserContext';

function DashboardHome() {
  const {user } = useContext(UserContext);

  const userRole = user?.data?.roleName || user?.data?.role?.name;

  return (
    <div className='p-4'>
        {userRole === 'student' ? <DashboardStdHome/> : <DashboardTHome/>}
    </div>
  );
}

export default DashboardHome;