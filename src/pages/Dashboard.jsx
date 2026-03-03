import React from 'react'
import SideBar from '../components/SideBar'

const Dashboard = () => {
    return (
        <div className='flex h-screen'>
            <SideBar />
            <div className='flex-1 bg-[#f6f6f6]'>Dashboard</div>
        </div>
    )
}

export default Dashboard