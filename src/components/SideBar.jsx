import { Scale } from 'lucide-react';
import { menuGroups } from '../assets/menuGroup';

const SideBar = () => {
  return (
      <div className='flex flex-col justify-between w-60 bg-gray-200 p-2'>
        <div className='flex flex-row items-center gap-2'>
          <Scale size={40} color= '#00ad14'/>
          <h1 className='text-xl font-black'>Expensify</h1>
        </div>
        <div className='flex flex-col'>
          {
            menuGroups.map( item => (
              <div className='flex flex-col gap-2'>
                <div>{item.title}</div>
                <div className='flex flex-col p-2 gap-1'>
                  {item.items.map(ele => (
                    <div>{ele.name}</div>
                  ))}
                </div>
                <hr />
              </div>
            ))
          }
        </div>
        <div>
          card
        </div>
      </div>
  )
}

export default SideBar;