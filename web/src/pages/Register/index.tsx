import { logoStarplast } from '../../utils/ImagesImport';

import { Grid, Box, Typography, Hidden, Slide } from '@material-ui/core';

import { useStyles } from './styles';

import ImageComponent from '../../components/ImageComponent';
import Form from './Form';

function Register() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Component Image*/}
      <ImageComponent />
      <Slide
        direction="right"
        timeout={500}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <Grid className={classes.content}>
          <Hidden only={['xs', 'sm', 'md']}>
            <Box className={classes.boxImage}>
              <img width="300px" src={logoStarplast} alt="Logo Bieffe" />
            </Box>
          </Hidden>
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
