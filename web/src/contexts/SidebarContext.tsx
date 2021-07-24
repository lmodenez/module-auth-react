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

  return (
    <SidebarContext.Provider value={{ isMobile }}>
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
