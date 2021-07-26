import { useContext } from 'react';

import { SidebarContext } from '../contexts/SidebarContext';

export function useSidebar() {
  const { isMobile, isMenuOpen, handleMenuOpen, handleMenuClose } =
    useContext(SidebarContext);

  return { isMobile, isMenuOpen, handleMenuOpen, handleMenuClose };
}
