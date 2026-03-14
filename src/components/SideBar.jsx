import { Gem, Scale } from 'lucide-react';
import { menuGroups } from '../assets/menuGroup';

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between w-60 bg-gray-200 p-4'>
      <div className='flex flex-row items-center gap-2'>
        <Scale size={40} color='#00ad14' />
        <h1 className='text-xl font-black'>Expensify</h1>
      </div>
      <div className='flex flex-col'>
        {
          menuGroups.map((item, index) => (
            <div className='flex flex-col'>
              <div className='text-gray-400 font-semibold text-[14px]'>{item.title}</div>
              <div className='flex flex-col pt-1'>
                {item.items.map(ele => {
                  const Icon = ele.icon
                  return (
                    <div className='flex gap-2 items-center p-2 hover:bg-linear-to-r from-blue-100 to-blue-50 rounded-xl'>
                      <Icon size={16} className='text-gray-600' /><span className='text-gray-600 font-semibold text-[12px]'>{ele.name}</span>
                    </div>
                  )
                })}
              </div>
              {index != menuGroups.length - 1 && (<hr className='text-gray-400 border rounded-2xl my-2' />)}
              
            </div>
          ))
        }
      </div>
      <div className='flex flex-col items-center justify-center border-2 border-blue-600 p-3 rounded-2xl bg-linear-to-t from-blue-300 to-blue-50'>
        <div className ='flex gap-2 items-center'>
          <Gem className='text-blue-600'/>
          <span className='text-blue-600 font-bold'>Upgrade to Pro</span>
        </div>
        <span className='font-light text-[10px] leading-4'>Upgrade to pro plan + get 1 month more</span>
      </div>
    </div>
  )
}

export default SideBar;