'use client';
import { LoginSvg } from '@/public/assets/loginSvg';
import RegisterForm from './registerForm';

const Register = () => {
  return (
    <div className='flex h-screen'>
      <section className='hidden basis-1/2 justify-center bg-slate-400 sm:flex'>
        <LoginSvg className='w-2/3' />
      </section>
      <section className='flex flex-1 basis-1/2 items-center justify-center'>
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
