'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { GoogleSvg } from '@/public/assets/googleSvg';
import { FacebookSvg } from '@/public/assets/facebookSvg';
import { LoginArrowSvg } from '@/public/assets/loginArrowSvg';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
});

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('🚀 ~ file: loginForm.tsx:45 ~ LoginForm ~ values:', values);
  };

  return (
    <Form {...form}>
      <motion.form
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 rounded-md border border-b-white p-6 shadow-md'
      >
        <section className='flex flex-col items-center justify-center'>
          <Label htmlFor='header1' className='text-center text-base'>
            Login
          </Label>
          <Label
            htmlFor='header2'
            className='text-center text-base text-gray-400'
          >
            Enter your credentials to login
          </Label>
        </section>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='Enter username' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter password'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className='flex justify-between gap-2'>
          <span className='flex items-center gap-2'>
            <Checkbox />
            <Label
              htmlFor='rememberMe'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Remember me
            </Label>
          </span>
          <Label
            htmlFor='forgotPassword'
            className='cursor-pointer text-sm font-medium text-red-400'
          >
            Forgot password?
          </Label>
        </section>
        <Button
          type='submit'
          className='flex w-full items-center gap-2 bg-gray-700 text-white'
        >
          Login
          <LoginArrowSvg />
        </Button>
        <div className='relative mb-2'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-white px-2  dark:bg-gray-950'>
              Or continue with
            </span>
          </div>
        </div>
        <div className='flex justify-around'>
          <GoogleSvg className='cursor-pointer' />
          <FacebookSvg className='cursor-pointer' />
        </div>
        <p className='mb-2 mt-2 text-center text-xs text-gray-700'>
          {' '}
          Don&apos;t have an account?{' '}
          <span
            onClick={() => router.push('/register')}
            className=' rotate-45 cursor-pointer text-blue-600 fade-in-100 hover:underline'
          >
            Register
          </span>
        </p>
      </motion.form>
    </Form>
  );
};

export default LoginForm;
