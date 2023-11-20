import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeachersCarouselNavigationButtons = ({
  handleClick,
}: {
  handleClick: (direction: 'backward' | 'forward') => void;
}) => {
  return (
    <div className="absolute bottom-[-40px] flex w-full justify-center gap-6">
      <button
        onClick={() => handleClick('backward')}
        type="button"
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-500 hover:bg-slate-400"
      >
        <div className="translate-x-[-2px]">
          <ChevronLeft size={32} />
        </div>
      </button>
      <button
        onClick={() => handleClick('forward')}
        type="button"
        className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-500 hover:bg-slate-400"
      >
        <div className="translate-x-[2px]">
          <ChevronRight size={32} />
        </div>
      </button>
    </div>
  );
};

export default TeachersCarouselNavigationButtons;
