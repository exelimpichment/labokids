'use client';
import { titleFont } from '../fonts';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Toaster } from 'sonner';
import { useForm, SubmitHandler } from 'react-hook-form';
import { formSchema, type TFormSchema } from '@/lib/types';
import { useGlobalContext } from '../../context/globalContext';
import { zodResolver } from '@hookform/resolvers/zod';

const Form = () => {
  const { setContactUsDialog } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: TFormSchema) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // reset();
    // setContactUsDialog(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex h-[370px] w-[250px]  flex-col justify-between rounded border border-gray-800 bg-white p-4"
    >
      <h2 className={`${titleFont.className} pb-3 text-2xl text-black`}>
        We&rsquo;ll reach you out!
      </h2>
      <div>
        <label htmlFor="phone" className="invisible"></label>
        <Input
          {...register('phone')}
          type="text"
          id="phone"
          className="rounded"
          placeholder="phone"
        />

        {errors.phone ? (
          <p className="mb-2 text-left text-sm text-red-500">{`${errors.phone.message}`}</p>
        ) : (
          <p className="mb-2 text-left text-sm text-gray-500">required*</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="invisible"></label>
        <Input
          {...register('email')}
          type="text"
          id="email"
          className="rounded"
          placeholder="email"
        />

        {errors.email ? (
          <p className="mb-2 text-left text-sm text-red-500">
            <span className="text-gray-500">optional* </span>{' '}
            {`${errors.email.message}`}
          </p>
        ) : (
          <p className="mb-2 text-left text-sm text-gray-500">optional*</p>
        )}
      </div>

      <div className="dfdfd">
        <label htmlFor="textArea" className="invisible"></label>
        <Textarea
          {...register('message')}
          id="textArea"
          className="resize-none rounded"
          placeholder="message for us"
        />

        {errors.message ? (
          <p className="mb-2 text-left text-sm text-red-500">{`${errors.message.message}`}</p>
        ) : (
          <p className="mb-2 text-left text-sm text-gray-500">optional*</p>
        )}
      </div>

      <button
        style={{ cursor: 'pointer' }}
        className="inline-block w-full cursor-pointer rounded bg-laboBlue px-2 py-[7px] text-lg transition hover:bg-[#0a4d6b] disabled:bg-gray-500"
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

{
  /* <ContactUsDialogSendButton />  <== toas logic in here */
}
