import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black'>
      {children}
    </div>
  );
};

export default Container;
