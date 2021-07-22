import { Grid, Typography, Slide } from '@material-ui/core';

import { useStyles } from './styles';

import BoxLeft from '../../components/BoxLeft';
import Form from './Form';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Component Image */}
      <BoxLeft />

      <Slide
        direction="left"
        timeout={400}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <Grid className={classes.content}>
          <Typography variant="h3" className={classes.text}>
            Realize seu login
          </Typography>
          {/* Component Form */}
          <Form />
        </Grid>
      </Slide>
    </div>
  );
}
export default Home;
