import { CheckCircle2 } from 'lucide-react';
import { titleFont } from '../fonts';

const SuccessToast = ({
  message,
  notificationColor,
}: {
  message: string;
  notificationColor: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`${notificationColor}`}>
        <CheckCircle2 />
      </div>

      <span className={`${titleFont.className} text-base`}>{message}</span>
    </div>
  );
};

export default SuccessToast;
