import ContactUsDialogSendButton from '../ContactUsDialogSendButton';
import { titleFont } from '../fonts';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from 'sonner';

const Form = () => {
  return (
    <div className=" flex h-[370px] w-[250px]  flex-col justify-between rounded border border-gray-800 bg-white p-4">
      <h2 className={`${titleFont.className} pb-3 text-2xl text-black`}>
        We&rsquo;ll reach you out!
      </h2>
      <div>
        <Input type="text" className="rounded" placeholder="phone" />
        <p className="mb-2 text-left text-sm text-gray-500">required*</p>
      </div>
      <div>
        <Input type="email" className="rounded" placeholder="email" />
        <p className="mb-2 text-left text-sm text-gray-500">optional*</p>
      </div>

      <div>
        <Textarea
          className="resize-none rounded"
          placeholder="message for us"
        />
        <p className="mb-4 text-left text-sm text-gray-500">optional*</p>
        <ContactUsDialogSendButton />
      </div>
    </div>
  );
};

export default Form;
