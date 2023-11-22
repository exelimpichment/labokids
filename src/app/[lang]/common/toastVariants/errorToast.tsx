import { Ban } from 'lucide-react';
import { titleFont } from '../fonts';

const ErrorToast = ({
  message,
  notificationColor,
}: {
  message: string;
  notificationColor: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`${notificationColor}`}>
        <Ban />
      </div>

      <span className={`${titleFont.className} text-base`}>{message}</span>
    </div>
  );
};

export default ErrorToast;
