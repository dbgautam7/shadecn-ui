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
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { LoginArrowSvg } from '@/public/assets/loginArrowSvg';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z
  .object({
    fullName: z.string().min(4, { message: 'Fullname must be provided' }),
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have more than 8 characters'),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
    terms: z.boolean().default(false).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
            Create an account
          </Label>
          <Label
            htmlFor='header2'
            className='text-center text-base text-gray-400'
          >
            Enter your credentials to register
          </Label>
        </section>
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter fullName' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter email' {...field} />
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
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder='Confirm password'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='terms'
          render={({ field }) => (
            <FormItem className='flex items-end gap-2'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className=''>Accept terms and conditions</FormLabel>
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='flex w-full items-center gap-2 bg-gray-700 text-white'
        >
          Register
          <LoginArrowSvg />
        </Button>
        <p className='mb-2 mt-2 text-center text-xs text-gray-700'>
          {' '}
          Already have an account?{' '}
          <span
            onClick={() => router.push('/login')}
            className=' text-blue-600 hover:underline'
          >
            Login
          </span>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
