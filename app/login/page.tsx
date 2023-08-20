"use client"
import { LoginSvg } from '@/public/assets/loginSvg'
import { usePathname } from 'next/navigation'


const Login=()=>{

    const pathname=usePathname()
    console.log(pathname)

    return(
        <div className='bg-slate-400 border rounded-lg p-4'>
             Hello from the login page
            <LoginSvg className=" h-screen w-96" />   
        </div>
    )
}

export default Login