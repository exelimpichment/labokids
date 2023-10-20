'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useGlobalContext } from '../../context/globalContext';
import ContactUsDialogSendButton from '../ContactUsDialogSendButton';
import { titleFont } from '../fonts';
import { Toaster } from 'sonner';

const ContactUsDialog = () => {
  const { contactUsDialogOpen, setContactUsDialog } = useGlobalContext();
  return (
    <Transition.Root show={contactUsDialogOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setContactUsDialog(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0"
            aria-hidden="true"
            style={{ backdropFilter: 'blur(5px)' }}
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="
              flex 
              min-h-full 
              items-center 
              justify-center 
              p-4 
              text-center 
              sm:p-0
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                style={{ backdropFilter: 'blur(5px)' }}
                className="mx-auto flex h-[370px] w-[250px] max-w-sm flex-col justify-between rounded border border-gray-800 bg-black/40 p-4"
              >
                <Dialog.Title
                  className={`${titleFont.className} pb-3 text-2xl text-blue-200`}
                >
                  We&rsquo;ll reach you out!
                </Dialog.Title>
                <div>
                  <Input type="text" className="rounded" placeholder="phone" />
                  <p className="mb-2 text-left text-sm text-blue-200">
                    required*
                  </p>
                </div>
                <div>
                  <Input type="email" className="rounded" placeholder="email" />
                  <p className="mb-2 text-left text-sm text-blue-200">
                    optional*
                  </p>
                </div>

                <div>
                  <Textarea
                    className="resize-none rounded"
                    placeholder="message for us"
                  />
                  <p className="mb-4 text-left text-sm text-blue-200">
                    optional*
                  </p>
                  <ContactUsDialogSendButton />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ContactUsDialog;

// {/* <Dialog
//   open={contactUsDialogOpen}
//   onClose={() => setContactUsDialog(false)}
//   className="relative z-50"
// >
//   {/* The backdrop, rendered as a fixed sibling to the panel container */}
//   <div
//     className="cha fixed inset-0"
//     aria-hidden="true"
//     style={{ backdropFilter: 'blur(5px)' }}
//   >
//     {/* Apply a backdrop filter for the blurred background with less intensity */}
//   </div>

//   {/* Full-screen container to center the panel */}
//   <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
//     {/* The actual dialog panel  */}
//     <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
//       <Dialog.Title>Complete your order</Dialog.Title>

//       {/* ... */}
//     </Dialog.Panel>
//   </div>
// </Dialog>; */}
