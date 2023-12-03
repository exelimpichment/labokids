'use client';
import ReCAPTCHA from 'react-google-recaptcha';
import { textFont, titleFont } from '../fonts';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { formSchema, type TFormSchema } from '@/lib/types';
import { useGlobalContext } from '../../context/globalContext';
import { zodResolver } from '@hookform/resolvers/zod';
import SuccessToast from '../toastVariants/successToast';
import ErrorToast from '../toastVariants/errorToast';
import { useEffect, useRef, useState } from 'react';
import { verifyCaptcha } from '@/src/app/actions';
import * as Sentry from '@sentry/nextjs';

interface IFormContent {
  content: {
    heading: string;
    phonePlaceholder: string;
    phoneRequirement: string;
    emailPlaceholder: string;
    emailRequirement: string;
    textPlaceholder: string;
    textRequirement: string;
    buttonText: string;
    errorPhoneString: string;
    errorEmailString: string;
  };
}

const Form: React.FC<IFormContent> = ({
  content: {
    heading,
    phonePlaceholder,
    phoneRequirement,
    emailPlaceholder,
    emailRequirement,
    textPlaceholder,
    textRequirement,
    buttonText,
    errorPhoneString,
    errorEmailString,
  },
}) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  const onSubmit = async (data: TFormSchema) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      if (response.ok) {
        toast(
          <SuccessToast
            message="Thank you! We will contact you shortly."
            notificationColor="text-laboBlue"
          />,
          {
            duration: 4000,
          }
        );
      }

      if (responseData.errors) {
        const errors = responseData.errors;

        if (errors.email) {
          setError('email', {
            type: 'server',
            message: errors.email,
          });
        } else if (errors.password) {
          setError('phone', {
            type: 'server',
            message: errors.phone,
          });
        } else if (errors.confirmPassword) {
          setError('message', {
            type: 'server',
            message: errors.message,
          });
        } else {
          toast.error('Please try again');
        }
      }
    } catch (error) {
      console.log(error);
      toast(
        <ErrorToast
          message="Something went wrong. Try again later!"
          notificationColor="text-laboRed"
        />,
        {
          duration: 4000,
        }
      );
    }

    reset();
    setContactUsDialogOpen(false);
  };

  const { contactUsDialogOpen, setContactUsDialogOpen } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setContactUsDialogOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setContactUsDialogOpen(false);
      }
    };
    //
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [setContactUsDialogOpen, reset]);

  useEffect(() => {
    if (contactUsDialogOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'scroll';
      };
    }
    return;
  }, [contactUsDialogOpen]);

  return (
    contactUsDialogOpen && (
      <div
        ref={formRef}
        className="fixed left-1/2 top-1/2 z-[999] translate-x-[-50%] translate-y-[-50%]"
      >
        <div className=" flex flex-col items-center gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex h-[370px] w-[260px]  flex-col justify-between rounded border border-gray-800 bg-white p-4"
          >
            <h2
              className={`${titleFont.className}  pb-3 text-center text-2xl text-black`}
            >
              {heading}
            </h2>
            <div>
              <label htmlFor="phone" className="invisible"></label>
              <Input
                {...register('phone')}
                type="text"
                id="phone"
                className={`${textFont.className} rounded placeholder:text-gray-500`}
                placeholder={phonePlaceholder}
              />

              {errors.phone ? (
                <p
                  className={`mb-2 text-left text-sm text-red-500 ${textFont.className} `}
                >
                  {errorPhoneString}
                </p>
              ) : (
                <p
                  className={`mb-2 text-left text-sm text-gray-500 ${textFont.className} `}
                >
                  {phoneRequirement}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="invisible"></label>
              <Input
                {...register('email')}
                type="text"
                id="email"
                className={`${textFont.className} rounded placeholder:text-gray-500`}
                placeholder={emailPlaceholder}
              />

              {errors.email ? (
                <p
                  className={`mb-2 text-left text-sm text-red-500 ${textFont.className}`}
                >
                  <span className={`text-gray-500 ${textFont.className}`}>
                    {emailRequirement}{' '}
                  </span>{' '}
                  {errorEmailString}
                </p>
              ) : (
                <p
                  className={`mb-2 text-left text-sm text-gray-500 ${textFont.className}`}
                >
                  {emailRequirement}
                </p>
              )}
            </div>

            <div className="dfdfd">
              <label htmlFor="textArea" className="invisible"></label>
              <Textarea
                {...register('message')}
                id="textArea"
                className={`resize-none rounded placeholder:text-gray-500 ${textFont.className}`}
                placeholder={textPlaceholder}
              />

              {errors.message ? (
                <p className="mb-2 text-left text-sm text-red-500">{`${errors.message.message}`}</p>
              ) : (
                <p
                  className={`mb-2 text-left text-sm text-gray-500 ${textFont.className}`}
                >
                  {textRequirement}
                </p>
              )}
            </div>

            <button
              style={{ cursor: 'pointer' }}
              className="inline-block w-full cursor-pointer rounded bg-laboBlue px-2 py-[7px] text-lg transition hover:bg-[#0a4d6b] disabled:bg-gray-500"
              type="submit"
              disabled={isSubmitting || !isVerified}
            >
              {buttonText}
            </button>
          </form>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
        </div>
      </div>
    )
  );
};

export default Form;
