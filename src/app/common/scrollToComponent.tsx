'use client';

import { useGlobalContext } from '../context/globalContext';

const ScrollToComponent = () => {
  const { topicsRef } = useGlobalContext();
  return <div ref={topicsRef} className="border border-transparent"></div>;
};

export default ScrollToComponent;
