'use client';

import {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';

type GlobalContextType = {
  topicsRef: MutableRefObject<HTMLDivElement | null>;
  scrollToTopics: () => void;
  contactUsDialogOpen: boolean;
  setContactUsDialog: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  // hooks
  const [contactUsDialogOpen, setContactUsDialog] = useState<boolean>(false);
  const topicsRef = useRef<HTMLDivElement | null>(null);
  // functions
  const scrollToTopics = () => {
    if (topicsRef.current) {
      topicsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        topicsRef,
        scrollToTopics,
        contactUsDialogOpen,
        setContactUsDialog,
      }}
    >
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
