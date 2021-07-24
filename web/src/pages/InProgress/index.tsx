import { useHistory } from 'react-router';

import { Box, Button, Grid, Typography } from '@material-ui/core';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { useStyles } from './styles';

export function InProgress() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        <div className={classes.boxWrapper}>
          <div className={classes.box}>
            <Grid className={classes.grid} container spacing={2}>
              <span>Página em desenvolvimento</span>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InProgress;
