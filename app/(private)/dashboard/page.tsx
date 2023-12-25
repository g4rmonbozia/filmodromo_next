import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function Home() {
	return (
    <div className='w-full mt-10 flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0'>
      <div className='w-4/5 md:w-96 lg:w-1/3 h-80 flex flex-col items-center justify-start bg-red-200 shadow rounded overflow-clip'>
        <div className='w-full h-20 bg-red-400'></div>
        <div className='w-full p-4 flex flex-row flex-nowrap space-x-4 overflow-hidden'>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
        </div>
      </div>
      <div className='w-4/5 md:w-96 lg:w-1/3 h-80 flex flex-col items-center justify-start bg-blue-200 shadow rounded overflow-clip'>
        <div className='w-full h-20 bg-blue-400'></div>
        <div className='w-full p-4 flex flex-row flex-nowrap space-x-4 overflow-hidden'>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
          <div className='flex-none w-[136px] h-[204px] bg-white'></div>
        </div>
      </div>
    </div>
	);
}