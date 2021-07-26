import { Grid } from '@material-ui/core';
import clsx from 'clsx';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { useSidebar } from '../../hooks/useSidebar';

import { useStyles } from './styles';

export function InProgress() {
  const classes = useStyles();
  const { isMobile, isMenuOpen } = useSidebar();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        <main
          className={clsx(classes.main, {
            [classes.mainShift]: isMenuOpen,
          })}
        >
          <div className={classes.boxWrapper}>
            <div className={classes.box}>
              <Grid className={classes.grid} container spacing={2}>
                <span>Página em desenvolvimento</span>
              </Grid>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default InProgress;
