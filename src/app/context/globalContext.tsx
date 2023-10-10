'use client';

import {
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';

type GlobalContextType = {
  topicsRef: MutableRefObject<HTMLDivElement | null>;
  scrollToTopics: () => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  // hooks
  const topicsRef = useRef<HTMLDivElement | null>(null);
  // functions
  const scrollToTopics = () => {
    if (topicsRef.current) {
      topicsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <GlobalContext.Provider value={{ topicsRef, scrollToTopics }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    );
  }
  return context;
};
