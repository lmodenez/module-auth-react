import { Hidden, Grid, Typography, Slide } from '@material-ui/core';
import { logoPecege } from '../../utils/Images';

import { useStyles } from './styles';

function BoxLeft() {
  const classes = useStyles();

  return (
    <Hidden only={['xs', 'sm', 'md']}>
      <Slide
        direction="down"
        in={true}
        timeout={800}
        mountOnEnter
        unmountOnExit
      >
        <Grid className={classes.content}>
          <img src={logoPecege} alt="Barber Logo" width={350} height={120} />
          <Typography
            variant="h6"
            style={{ margin: '20px', fontSize: '1rem', color: '#a7a7a7' }}
          >
            @2021 - Todos os direitos reservados.
          </Typography>
        </Grid>
      </Slide>
    </Hidden>
  );
}

export default BoxLeft;
