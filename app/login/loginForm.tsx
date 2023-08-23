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
    console.log(values, 'values');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 rounded-md border border-b-white px-6 py-6 shadow-md'
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
        <section className='flex justify-between'>
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
            <span className='text-muted-foreground bg-white px-2'>
              Or continue with
            </span>
          </div>
        </div>
        <div className='m-2 grid grid-cols-2 gap-1'>
          <span>
            <GoogleSvg className='' />
            Google
          </span>
          {/* </Button> */}
          {/* <Button variant='outline' className='flex items-center gap-2'> */}
          <FacebookSvg />
          Facebook
          {/* </Button> */}
        </div>
        <p className='mb-2 mt-2 text-center text-xs text-gray-700'>
          {' '}
          Dont have an account?{' '}
          <span
            onClick={() => router.push('/register')}
            className=' text-blue-600 hover:underline'
          >
            Register
          </span>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
