import { ChevronDown, Coins, CreditCard, HandCoins, MoreVertical, Target, TrendingDown, TrendingUp, Wallet } from 'lucide-react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    ArcElement,
    scales
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { color } from 'chart.js/helpers';

const dataLine = {
    labels: ['','','','','','',''],
    datasets: [
        {
            data: [0, 1000, 1500, 500, 2000, 1700, 2500],
            borderColor: '#5D5FEF',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 0,
            pointBackgroundColor: '#5D5FEF',
        },
    ],
};

const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            enabled: true,
            intersect: false,
            mode: 'index',
        }
    },
    scales: {
        x: { display: false },
        y: { display: false },
    },
    elements: {
        line: {
            fill: false,
        }
    }
};

const dataPie = {
    labels: [],
    datasets: [{
        data: [25, 75],
        backgroundColor: ['rgba(254, 249, 194, 1)', 'rgba(255, 159, 64)']
    },
    ]
};

const optionsPie = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
    }
};

const StatCharts = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip,
        ArcElement
    );
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='flex flex-col border-2 border-gray-200 rounded-xl justify-around p-3 bg-linear-to-t from-blue-100 to-white'>
                <div className='flex flex-row justify-between gap-3 items-center'>
                    <div className='border-2 rounded-md border-blue-500 bg-blue-100 p-0.5'>
                    <Wallet className='text-blue-500' size={15}/>
                    </div>
                    <span className='flex flex-1 text-sm text-gray-500 font-semibold'>Account Balance</span>
                    <MoreVertical className='text-gray-400' size={15}/>
                </div>
                <div className='text-2xl font-bold py-5'>
                    $7,49,088.00
                </div>
                <div className='flex flex-row items-center justify-between gap-1'>
                    <div className='border border-green-500 bg-green-100 rounded-sm p-0.5'>
                        <TrendingUp size={10} className='text-green-500'/>
                    </div>
                    <span className='flex-1 text-sm text-green-500 font-semibold'>6% more then last month</span>
                    <div className='border border-gray-500 rounded-md p-0.5 px-1 flex flex-row justify-between items-center gap-1'>
                        <CreditCard size={10} className='text-gray-500'/>
                        <span className='text-[9px] text-gray-500'>SBI</span>
                        <ChevronDown size={10} className='text-gray-500' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col border-2 border-gray-200 rounded-xl justify-around p-3 bg-linear-to-t from-red-100 to-white'>
                <div className='flex flex-row justify-between gap-3 items-center'>
                    <div className='border-2 rounded-md border-red-500 bg-red-100 p-0.5'>
                        <HandCoins className='text-red-500' size={15} />
                    </div>
                    <span className='flex flex-1 text-sm text-gray-500 font-semibold'>Monthly Expenses</span>
                    <MoreVertical className='text-gray-400' size={15} />
                </div>
                <div className='text-2xl font-bold py-5'>
                    $24,093.00
                </div>
                <div className='flex flex-row items-center justify-between gap-1'>
                    <div className='border border-red-500 bg-red-100 rounded-sm p-0.5'>
                        <TrendingDown size={10} className='text-red-500' />
                    </div>
                    <span className='flex-1 text-sm text-red-500 font-semibold'>2% less then last month</span>
                </div>
            </div>

            <div className='flex flex-col border-2 border-gray-200 rounded-xl p-3 justify-around bg-linear-to-t from-purple-100 to-white'>
                <div className='flex flex-row justify-between gap-3 items-center'>
                    <div className='border-2 rounded-md border-purple-500 bg-purple-100 p-0.5'>
                        <Coins className='text-purple-500' size={15} />
                    </div>
                    <span className='flex flex-1 text-sm text-gray-500 font-semibold'>Total Investment</span>
                    <MoreVertical className='text-gray-400' size={15} />
                </div>
                <div className="h-16 w-full">
                    <Line data={dataLine} options={optionsLine} />
                </div>
                <div className='flex flex-row items-baseline justify-end gap-2'>
                    <div className='border border-green-500 bg-green-100 rounded-sm p-0.5 mt-0.5'>
                        <TrendingUp size={10} className='text-green-500' />
                    </div>
                    <div className='text-2xl font-bold'>
                        $7,48,8.00
                    </div>
                </div>
            </div>
            <div className='flex flex-col border-2 border-gray-200 rounded-xl p-3 bg-linear-to-t from-yellow-100 to-white'>
                <div className='flex flex-row justify-between gap-3 items-center'>
                    <div className='border-2 rounded-md border-yellow-500 bg-yellow-100 p-0.5'>
                        <Target className='text-yellow-500' size={15} />
                    </div>
                    <span className='flex flex-1 text-sm text-gray-500 font-semibold'>Goal</span>
                    <MoreVertical className='text-gray-400' size={15} />
                </div>
                <div className='flex flex-row items-center gap-4 pt-4'>
                    <div className='h-30 w-30'>
                    <Doughnut data = {dataPie} options={optionsPie}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='font-bold text-md'>Apple iPhone 17 pro</span>
                        <span className='text-gray-500 text-xs'>Required $1,45,000</span>
                        <span className='text-gray-500 text-xs'>Collect $75,000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatCharts