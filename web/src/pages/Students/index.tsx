import { useHistory } from 'react-router';

import { Box, Button, Grid, Typography } from '@material-ui/core';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { useStyles } from './styles';

export function Students() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        <div className={classes.boxWrapper}>
          <div className={classes.box}>
            <Button
              type="button"
              style={{
                backgroundColor: '#990000',
                color: '#FFFFFF',
                width: '200px',
              }}
              onClick={() => history.push('/aluno/novadisciplina')}
            >
              Nova disciplina
            </Button>
            <Grid className={classes.grid} container spacing={2}>
              <Grid item xs={6} className={classes.gridItem}>
                <Box
                  className={classes.discipline}
                  style={{ backgroundColor: 'red' }}
                >
                  <div className={classes.gridItemTitle}>
                    <Typography variant="h6">Matemática</Typography>
                  </div>
                  <div className={classes.gridItemContent}>
                    <span>
                      A Matemática é a ciência que relaciona as práticas do
                      cotidiano e a natureza ao raciocínio humano e à lógica
                      numérica.
                    </span>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} className={classes.gridItem}>
                <Box
                  className={classes.discipline}
                  style={{ backgroundColor: 'red' }}
                >
                  <div className={classes.gridItemTitle}>
                    <Typography variant="h6">Matemática</Typography>
                  </div>
                  <div className={classes.gridItemContent}>
                    <span>
                      A Matemática é a ciência que relaciona as práticas do
                      cotidiano e a natureza ao raciocínio humano e à lógica
                      numérica.
                    </span>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} className={classes.gridItem}>
                <Box
                  className={classes.discipline}
                  style={{ backgroundColor: 'red' }}
                >
                  <div className={classes.gridItemTitle}>
                    <Typography variant="h6">Matemática</Typography>
                  </div>
                  <div className={classes.gridItemContent}>
                    <span>
                      A Matemática é a ciência que relaciona as práticas do
                      cotidiano e a natureza ao raciocínio humano e à lógica
                      numérica.
                    </span>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
