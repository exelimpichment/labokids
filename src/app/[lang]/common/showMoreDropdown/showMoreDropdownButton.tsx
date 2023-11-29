import { ChevronDown } from 'lucide-react';
import { textFont } from '../fonts';
import { Dispatch, SetStateAction } from 'react';

interface IShowMoreDropdownButton {
  state: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  };
}

const ShowMoreDropdownButton: React.FC<IShowMoreDropdownButton> = ({
  state: { isOpen, setIsOpen },
}) => {
  return (
    <button
      className={`${textFont.className} mt-2 flex w-full cursor-pointer items-center justify-center px-1 py-2 text-xl hover:text-laboBlue`}
      onClick={() => setIsOpen((prev: boolean) => !prev)}
    >
      <span>More Photos </span>
      <div className={`${isOpen ? null : 'rotate-180'} `}>
        <ChevronDown size={28} />
      </div>
    </button>
  );
};

export default ShowMoreDropdownButton;
