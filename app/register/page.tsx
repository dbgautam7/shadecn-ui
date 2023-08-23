'use client';
import { LoginSvg } from '@/public/assets/loginSvg';
import RegisterForm from './registerForm';

const Register = () => {
  return (
    <div className='flex h-screen '>
      <section className='flex basis-1/2 justify-center bg-slate-400'>
        <LoginSvg className='w-96' />
      </section>
      <section className='flex basis-1/2 items-center justify-center'>
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
