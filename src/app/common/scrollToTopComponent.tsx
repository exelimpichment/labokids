'use client';

import { useGlobalContext } from '../context/globalContext';

const ScrollToTopComponent = () => {
  const { topRef } = useGlobalContext();
  return (
    <div
      ref={topRef}
      className="absolute left-0 top-0 border border-transparent"
    ></div>
  );
};

export default ScrollToTopComponent;
