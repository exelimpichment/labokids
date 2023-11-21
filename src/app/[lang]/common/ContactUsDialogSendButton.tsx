'use client';

import { Button } from '@/components/ui/button';
import { useGlobalContext } from '../context/globalContext';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactUsDialogSendButton = () => {
  const { setContactUsDialog } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoading(false);
        resolve('no loading');
      }, 1000); // 1 minute is 60,000 milliseconds
    });
    setContactUsDialog(false);
    toast.custom((t) => (
      <div>
        This is a custom component{' '}
        <button onClick={() => toast.dismiss(t)}>close</button>
      </div>
    ));
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {/* <Button
        disabled={loading}
        className="rounded bg-laboBlue text-lg hover:bg-white"
        variant="outline"
        type="submit"
        onClick={handleClick}
      >
        Send
      </Button> */}
    </div>
  );
};

export default ContactUsDialogSendButton;
