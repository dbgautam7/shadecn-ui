'use client';
import { LoginSvg } from '@/public/assets/loginSvg';
import LoginForm from './loginForm';

const Login = () => {
  return (
    <div className='flex h-screen justify-center'>
      <section className='hidden basis-1/2 justify-center bg-slate-400 sm:flex'>
        <LoginSvg className='w-2/3' />
      </section>
      <section className='flex flex-1 basis-1/2 items-center justify-center'>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
