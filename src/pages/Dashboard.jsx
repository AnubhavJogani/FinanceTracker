import React from 'react'
import SideBar from '../components/SideBar'
import Main from '../components/Main'

const Dashboard = () => {
    return (
        <div className='flex h-screen'>
            <SideBar />
            <Main />
        </div>
    )
}

export default Dashboard