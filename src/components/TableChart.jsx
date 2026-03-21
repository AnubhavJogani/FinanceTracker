import { useState } from 'react';
import { ArrowLeftRight, SlidersVertical, Calendar, ChevronDown, MoreVertical, File } from 'lucide-react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';

const defdata = [
  {
    "sn": 1,
    "amount": 2100.00,
    "currency": "₹",
    "category": "Shopping",
    "subCategory": "Amazon",
    "date": "2025-05-31",
    "mode": "UPI"
  },
  {
    "sn": 2,
    "amount": 299.00,
    "currency": "₹",
    "category": "Movie",
    "subCategory": "PVR",
    "date": "2025-05-28",
    "mode": "UPI"
  },
  {
    "sn": 3,
    "amount": 5000.00,
    "currency": "₹",
    "category": "Investment",
    "subCategory": "Groww",
    "date": "2025-05-24",
    "mode": "Bank"
  },
  {
    "sn": 4,
    "amount": 2460.00,
    "currency": "₹",
    "category": "Travel",
    "subCategory": "IRCTC",
    "date": "2025-05-20",
    "mode": "Card"
  },
  {
    "sn": 5,
    "amount": 678.00,
    "currency": "₹",
    "category": "Food",
    "subCategory": "Swiggy",
    "date": "2025-05-15",
    "mode": "UPI"
  }
];

const subscriptions = [
  { id: 1, name: 'Netflix', date: '15 June 2025', amount: '₹149.00', icon: 'https://www.vhv.rs/dpng/d/453-4532423_icon-netflix-logo-png-transparent-png.png' },
  { id: 2, name: 'Spotify', date: '24 Aug 2025', amount: '₹49.00', icon: 'https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg' },
  { id: 3, name: 'Figma', date: '01 Jan 2026', amount: '₹3999.00', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/figma-icon.png' },
  { id: 4, name: 'WIFI', date: '11 June 2025', amount: '₹399.00', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/airtel-logo-icon.png' },
  { id: 5, name: 'Electricity', date: '31 June 2025', amount: '₹1265.00', icon: 'https://play-lh.googleusercontent.com/zNCkWerOvcmjkk6AKpuy0oJO4szR2G_CgEKgNSw0wm6LPkzTgfhiW3e6slJr00UV9Q=w600-h300-pc0xffffff-pd' },
];

const TableChart = () => {

  const [data, setData] = useState(defdata);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('sn', {
      header: () => 'S.N',
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor('amount', {
      header: () => 'Amount',
      cell: (info) => <span>{console.log(info)}{info.row.original.currency}{info.getValue().toFixed(2)}</span>,
    }),
    columnHelper.accessor('category', {
      header: () => <span>Category</span>,
    }),
    columnHelper.accessor('subCategory', {
      header: () => <span>Sub Category</span>,
    }),
    columnHelper.accessor('date', {
      header: 'Date',
    }),
    columnHelper.accessor('mode', {
      header: 'Mode',
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })


  return (
    <div className='grid grid-cols-4 gap-6'>
      <div className=' col-span-4 lg:col-span-3 flex flex-col border-2 border-gray-200 rounded-xl p-3 bg-white'>
        <div className='flex flex-row items-center gap-2 pb-4'>
          <div className='border-2 rounded-md text-blue-500 bg-blue-100 p-0.5 w-5.5 h-5.5'>
            <ArrowLeftRight className='text-blue-500' size={15} />
          </div>
          <div className='flex-1 font-bold'>
            Recent Expenses
          </div>
          <div className='border border-gray-500 rounded-md p-0.5 px-1 flex flex-row justify-between items-center gap-1'>
            <SlidersVertical size={12} className='text-gray-500' />
            <span className='text-[12px] text-gray-500'>Filter</span>
          </div>
          <div className='border border-gray-500 rounded-md p-0.5 px-1 flex flex-row justify-between items-center gap-1'>
            <Calendar size={12} className='text-gray-500' />
            <span className='text-[12px] text-gray-500'>Recent</span>
            <ChevronDown size={12} className='text-gray-500' />
          </div>
          <MoreVertical className='text-gray-400' size={15} />
        </div>
        <table className='w-full border-separate border-spacing-y-3 pl-4'>
          <thead className='border-b-2 border-gray-300'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className='border'>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className='text-start border-b border-gray-200 py-3'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-col border-2 border-gray-200 rounded-xl p-3 bg-white'>
        <div className='flex flex-row items-center gap-2 pb-4'>
          <div className='border-2 rounded-md text-yellow-500 bg-yellow-100 p-0.5 w-5.5 h-5.5'>
            <File className='text-yellow-500' size={15} />
          </div>
          <div className='flex-1 font-bold'>
            Bill & Subscription
          </div>
          <MoreVertical className='text-gray-400' size={15} />
        </div>
        <div className='flex flex-col gap-3'>
          {
            subscriptions.map(item => (
              <div className='flex flex-row items-center gap-2'>
                <div className='rounded-full overflow-hidden w-10 h-10 shrink-0 border border-gray-100'>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex-1 flex-col gap-2'>
                <div className='font-bold'>{item.name}</div>
                <div className='text-xs text-gray-500'>{item.date}</div>
                </div>
                <div className='font-semibold'>{item.amount}</div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default TableChart