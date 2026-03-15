import { Bell, Clock10, Search } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import avatar from '../assets/icons8-person-100.png'

const username = "Anubhav"

const DashboardNavBar = () => {
    const [currTime, setCurrTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, [])

    const formattedDate = currTime.toLocaleDateString('en-IN',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const formattedTime = currTime.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (
        <div className='flex items-center justify-between h-20 w-full p-5'>
            <div>
                <h2 className='font-black text-xl'>Hi, {username} 👋</h2>
                <span>Trach all your expances, track transactions.</span>
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <div className='flex flex-row gap-1 text-gray-500 text-sm items-center'>
                    <Clock10 size ={18} className='text-gray-500'/>
                    <span>{formattedTime} | {formattedDate} | IN</span>
                </div>
                <div className='flex flex-row justify-between items-center border border-gray-200 rounded-md p-2 w-100 bg-white'>
                    <input className = 'w-85 text-sm outline-none' placeholder='Search expenses, transactions, cards'/>
                    <Search className='text-gray-500' />
                </div>
                <div className='relative cursor-pointer p-2 rounded-full'>
                    <Bell className='text-gray-500' size={24} />

                    <div className='absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-red-600 text-white font-bold text-[10px] rounded-full border-2 border-white'>
                        2
                    </div>
                </div>
                <div>
                    <img src={avatar} width={55} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DashboardNavBar