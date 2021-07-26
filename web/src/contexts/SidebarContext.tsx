import {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarProps = {
  isMobile: boolean;
  isMenuOpen: boolean;
  handleMenuOpen: () => void;
  handleMenuClose: () => void;
};

export const SidebarContext = createContext({} as SidebarProps);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isMobile, setIsMobile] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size <= 1040) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(false);
  }

  function handleMenuClose() {
    setIsMenuOpen(true);
  }

  return (
    <SidebarContext.Provider
      value={{ isMobile, isMenuOpen, handleMenuOpen, handleMenuClose }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

function useWindowSize() {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [size]);
  return size;
}
