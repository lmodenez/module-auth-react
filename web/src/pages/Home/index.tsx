import { Grid, Box, Typography, Hidden, Slide } from '@material-ui/core';

import { logoStarplast } from '../../utils/ImagesImport';

import { useStyles } from './styles';

import ImageComponent from '../../components/ImageComponent';
import Form from './Form';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Component Image */}
      <ImageComponent />

      <Slide
        direction="left"
        timeout={400}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <Grid className={classes.content}>
          <Hidden only={['xs', 'sm', 'md']}>
            <Box className={classes.logo}>
              <img width="300px" src={logoStarplast} alt="Logo Bieffe" />
            </Box>
          </Hidden>
          <Box>
            <Typography variant="h3" className={classes.text}>
              Realize seu login
            </Typography>
            {/* Component Form */}
            <Form />
          </Box>
        </Grid>
      </Slide>
    </div>
  );
}
export default Home;
