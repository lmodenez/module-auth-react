import { Grid, Typography, Slide } from '@material-ui/core';

import { useStyles } from './styles';

import BoxLeft from '../../components/BoxLeft';
import Form from '../../components/FormLogin';

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
            Área do aluno
          </Typography>
          {/* Component Form */}
          <Form />
        </Grid>
      </Slide>
    </div>
  );
}
export default Home;
