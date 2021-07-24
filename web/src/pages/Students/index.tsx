import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { Box, Button, Grid, Zoom, Typography } from '@material-ui/core';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { useSidebar } from '../../hooks/useSidebar';

import { useStyles } from './styles';

import { api } from '../../services/api';

type DisciplineProps = {
  disciplina: string;
  descricao: string;
};

export function Students() {
  const classes = useStyles();
  const history = useHistory();
  const { isMobile } = useSidebar();
  const [result, setResult] = useState<DisciplineProps[]>([]);

  useEffect(() => {
    api.get('/disciplines').then((res) => setResult(res.data));
  }, []);

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        {!isMobile && <Sidebar />}
        <div className={classes.boxWrapper}>
          <div className={classes.box}>
            <div className={classes.mobileBox}>
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
            </div>
            <Grid className={classes.grid} container spacing={2}>
              {result?.map((disciplina, key) => (
                <Zoom in={true} timeout={1000}>
                  <Grid
                    key={key}
                    item
                    xs={12}
                    sm={6}
                    className={classes.gridItem}
                  >
                    <Box
                      className={classes.discipline}
                      style={{ backgroundColor: '#990000' }}
                    >
                      <div className={classes.gridItemTitle}>
                        <Typography variant="h6">
                          {disciplina.disciplina}
                        </Typography>
                      </div>
                      <div className={classes.gridItemContent}>
                        <span>{disciplina.descricao}</span>
                      </div>
                    </Box>
                  </Grid>
                </Zoom>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
