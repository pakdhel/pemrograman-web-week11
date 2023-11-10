import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='bg-white w-screen h-screen flex'>
      <div className='container flex flex-col items-center justify-center gap-4'>
        <div className='title'>
          <h1 className='font-bold text-4xl'>Welcome to my App</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <button className='bg-[#e0e0e0] p-[10px] w-[300px] border-[1px] border-black'>
            pakdhel
          </button>
          <button className='bg-[#e0e0e0] p-[10px] w-[300px] border-[1px] border-black'>
            ini button
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
