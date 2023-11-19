import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeachersCarouselNavigationButtons = ({
  handleClick,
}: {
  handleClick: (direction: 'backward' | 'forward') => void;
}) => {
  return (
    <div className="absolute bottom-0 flex w-full translate-y-1/2 justify-center gap-6">
      <button
        onClick={() => handleClick('backward')}
        type="button"
        className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-500 hover:bg-slate-400"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={() => handleClick('forward')}
        type="button"
        className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-laboBlue p-1 transition-all duration-500 hover:bg-slate-400"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default TeachersCarouselNavigationButtons;
