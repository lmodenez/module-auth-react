import { Grid, Box, Typography, Slide } from '@material-ui/core';

import { useStyles } from './styles';

import BoxLeft from '../../components/BoxLeft';
import Form from './Form';

function Register() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Component Image*/}
      <BoxLeft />
      <Slide
        direction="right"
        timeout={500}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <Grid className={classes.content}>
          <Box>
            <Typography variant="h3" className={classes.text}>
              Realize seu cadastro
            </Typography>

            {/* Component Form */}
            <Form />
          </Box>
        </Grid>
      </Slide>
    </div>
  );
}
export default Register;
