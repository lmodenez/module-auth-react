import { useEffect, useState } from 'react';

import { Box, Button, Typography, Zoom } from '@material-ui/core';

import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useStyles } from './styles';

import { api } from '../../services/api';
import { AxiosResponse } from 'axios';

export function ConfirmRegister() {
  const classes = useStyles();
  const history = useHistory();
  const token = useParams();

  const [acess, setAcess] = useState(true);

  console.log(token);

  useEffect(() => {
    api
      .post('confirm', {
        userToken: token,
      })
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          setAcess(true);
        }
      })
      .catch(() => {
        setAcess(false);
      });
  }, [token]);

  return (
    <div className={classes.root}>
      <Zoom in={true} timeout={500}>
        <Box className={classes.content}>
          {acess ? (
            <Typography variant="h4" className={classes.text}>
              Acesso liberado
            </Typography>
          ) : (
            <Typography variant="h4" className={classes.text}>
              Não foi possível liberar seu acesso.
            </Typography>
          )}

          <Box className={classes.boxButton}>
            <Button
              variant="contained"
              className={classes.button}
              style={{
                backgroundColor: '#2E76CF',
                color: 'white',
                width: '45%',
              }}
              color="primary"
              type="button"
              onClick={() => history.push('/')}
            >
              Página inicial
            </Button>
          </Box>
        </Box>
      </Zoom>
    </div>
  );
}

export default ConfirmRegister;
