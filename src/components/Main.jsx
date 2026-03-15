import React from 'react'
import DashboardNavBar from './DashboardNavBar'
import StatCharts from './StatCharts'
import DataCharts from './DataCharts'
import TableChart from './TableChart'

const Main = () => {
    return (
        <div className='flex flex-1 flex-col bg-[#f6f6f6] overflow-auto'>
            <DashboardNavBar />
            <div className='flex flex-col gap-6 mt-2 p-4'>
                <StatCharts />
                <DataCharts />
                <TableChart />
            </div>
        </div>

    )
}

export default Main