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
  burgerMenuOpen: boolean;
  setBurgerMenuOpen: Dispatch<SetStateAction<boolean>>;
  activeGalleryCollection: 'baloniki' | 'chemia' | 'mydlo' | 'lod';
  setActiveGalleryCollection: Dispatch<
    SetStateAction<'baloniki' | 'chemia' | 'mydlo' | 'lod'>
  >;
  scrolledView: boolean;
  setScrolledView: Dispatch<SetStateAction<boolean>>;
  topRef: MutableRefObject<HTMLDivElement | null>;
  scrollToTop: () => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  // hooks
  const [contactUsDialogOpen, setContactUsDialog] = useState<boolean>(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
  const [activeGalleryCollection, setActiveGalleryCollection] = useState<
    'baloniki' | 'chemia' | 'mydlo' | 'lod'
  >('baloniki');
  const [scrolledView, setScrolledView] = useState<boolean>(false);
  const topicsRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  // functions
  const scrollToTopics = () => {
    if (topicsRef.current) {
      topicsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    console.log('click');

    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        topicsRef,
        scrollToTopics,
        contactUsDialogOpen,
        setContactUsDialog,
        burgerMenuOpen,
        setBurgerMenuOpen,
        activeGalleryCollection,
        setActiveGalleryCollection,
        scrolledView,
        setScrolledView,
        topRef,
        scrollToTop,
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
