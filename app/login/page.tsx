'use client';
import { LoginSvg } from '@/public/assets/loginSvg';
import LoginForm from './loginForm';

const Login = () => {
  return (
    <div className='flex h-screen '>
      <section className='flex basis-1/2 justify-center bg-slate-400'>
        <LoginSvg className='w-96' />
      </section>
      <section className='flex basis-1/2 items-center justify-center'>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
