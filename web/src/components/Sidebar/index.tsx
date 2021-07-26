import { useState } from 'react';

import { Drawer } from '@material-ui/core';

import { SidebarNav } from './SidebarNav';

import { useSidebar } from '../../hooks/useSidebar';

import { useStyles } from './styles';

function Sidebar() {
  const classes = useStyles();

  const { isMenuOpen } = useSidebar();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isMenuOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SidebarNav />
      </Drawer>
    </div>
  );
}

export { Sidebar };
