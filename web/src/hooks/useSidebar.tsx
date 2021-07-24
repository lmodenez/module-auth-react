import { useContext } from 'react';

import { SidebarContext } from '../contexts/SidebarContext';

export function useSidebar() {
  const { isMobile } = useContext(SidebarContext);

  return { isMobile };
}
