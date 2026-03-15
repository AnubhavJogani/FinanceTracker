import React from 'react'
import { Calendar, HandCoins, TrendingUp, ChevronDown, MoreVertical, Grid, Tag } from 'lucide-react'
import { Bar, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
  ArcElement,
  plugins,
  layouts
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const optionsBar = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
      display: true,
      grid: {
        display: false,
      },
      border: {
        display: false
      },
      ticks: {
        color: '#9ca3af',
        font: { size: 10 }
      }
    },
    y: {
      display: true,
      grid: {
        display: false,
      },
      border: {
        display: false
      },
      ticks: {
        color: '#9ca3af',
        font: { size: 10 }
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
  },
};


const dataBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [15000, 20000, 10000, 3000, 20000, 20000],
      backgroundColor: 'rgba(71, 140, 255)',
      borderSkipped: false,
      border: false,
      borderRadius: 20,
      barThickness: 50
    },
    {
      label: 'Dataset 1',
      data: [30000, 30000, 30000, 30000, 30000, 30000],
      backgroundColor: 'rgba(71, 140, 255, 0.5)',
      border: false,
      borderSkipped: false,
      borderRadius: 20,
      barThickness: 50
    },
  ],
};

const dataPie = {
  labels: [
    'Food & Grocery',
    'Investment',
    'Shopping',
    'Travelling',
    'Miscellaneous',
    'Bill & Subscription'
  ],
  datasets: [
    {
      data: [6156, 5000, 4356, 3670, 2749, 2162],
      backgroundColor: [
        '#5D5FEF',
        '#FFB800',
        '#22C55E',
        '#A855F7',
        '#F97316',
        '#06BDF4',
      ],
      borderRadius: 7,
    }]
}

const optionsPie = {
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: {
    legend: {
      position: 'right',
      display: false,
      boxWidth: 100,

    },
  },
  spacing: 5
}

const DataCharts = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
      <div className='flex flex-col border-2 border-gray-200 rounded-xl p-3 bg-white'>
        <div className='flex flex-row items-center gap-2'>
          <div className='border-2 rounded-md border-red-500 bg-red-100 p-0.5 w-5.5 h-5.5'>
            <HandCoins className='text-red-500' size={15} />
          </div>
          <span className='flex flex-1 text-sm font-bold'>Monthly Expenses</span>
          <div className='border border-green-500 bg-green-100 rounded-sm p-0.5'>
            <TrendingUp size={10} className='text-green-500' />
          </div>
          <span className='flex text-sm text-green-500 font-semibold'>6% more then last month</span>
          <div className='border border-gray-500 rounded-md p-0.5 px-1 flex flex-row justify-between items-center gap-1'>
            <Calendar size={12} className='text-gray-500' />
            <span className='text-[12px] text-gray-500'>Recent</span>
            <ChevronDown size={12} className='text-gray-500' />
          </div>
          <MoreVertical className='text-gray-400' size={15} />
        </div>
        <div className='p-4'>
          <Bar options={optionsBar} data={dataBar} />
        </div>
      </div>

      <div className='flex flex-col border-2 border-gray-200 rounded-xl p-3 bg-white relative'>
        <div className='flex flex-row items-center gap-2'>
          <div className='border-2 rounded-md border-green-500 bg-green-100 p-0.5 w-5.5 h-5.5'>
            <Tag className='text-green-500' size={15} />
          </div>
          <span className='flex flex-1 text-sm font-bold'>Top Category</span>
          <div className='border border-gray-500 rounded-md p-0.5 px-1 flex flex-row justify-between items-center gap-1'>
            <Calendar size={12} className='text-gray-500' />
            <span className='text-[12px] text-gray-500'>Recent</span>
            <ChevronDown size={12} className='text-gray-500' />
          </div>
          <MoreVertical className='text-gray-400' size={15} />
        </div>
        <div className='flex flex-row items-center justify-center p-4 gap-10 mt-4'>
          <div className='h-60 w-60'>
            <Doughnut data={dataPie} options={optionsPie} />
          </div>
          <div className='flex flex-col gap-5 flex-1'>
            {dataPie.labels.map((label, i) => (
              <div key={label} className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <div
                    className='w-1 h-4 rounded-full'
                    style={{ backgroundColor: dataPie.datasets[0].backgroundColor[i] }}
                  />
                  <span className='text-xs font-medium text-gray-600'>{label}</span>
                </div>
                <span className='text-xs font-bold'>
                  ₹{dataPie.datasets[0].data[i].toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='absolute bottom-5 left-5 border border-black bg-gray-200 text-[10px] p-1 shadow'>
          more details
        </div>
      </div>
    </div>
  )
}

export default DataCharts