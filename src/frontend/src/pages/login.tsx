import React from "react";



const Login: React.FC = () => {
    return (
        <div className='bg-black h-screen w-screen flex justify-center items-center flex-col'>
        <h1 className='text-slate-300 text-[64px] mb-12'>USER LOGIN</h1>
        <form className='flex flex-col gap-12 w-1/3'>
          <div className='relative flex items-center justify-center'>
            <input type="text" placeholder="Username" className='h-14 w-[530px] p-2 rounded-full bg-[#242424] text-white text-center relative' />
            <span className='absolute right-4 bg-slate-50 rounded-full'>
              <img src= "../../public/assets/user.png" className='w-12 h-12 m-2' alt='user' />
            </span>
          </div>
          <div className='relative flex justify-center items-center'>
            <input type="password" placeholder="Password" className='h-14 w-[530px] p-2 rounded-full bg-[#242424] text-white text-center relative' />
            <span className='absolute left-4 bg-slate-50 rounded-full'>
              <img src= "../../public/assets/padlock.png" className='w-12 h-12 m-2 ' alt='padlock' />
            </span>
          </div>
          <button type="submit" className='w-[530px] self-center p-2 rounded-full bg-white text-center font-bold text-2xl'>Login</button>
        </form>
      </div>
    )
}