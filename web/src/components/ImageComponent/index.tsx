import {
  logoBieffe,
  logoPeels,
  logoFly,
  logoPolisport,
  logoCatlike,
  iconeInstagram,
  iconeFacebook,
  iconeLinkedIn,
  iconeYoutube,
} from '../../utils/ImagesImport';

import { Box, Hidden, Grid, Typography, Slide } from '@material-ui/core';

import { useStyles } from './styles';

function ImageComponent() {
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
          <Box className={classes.boxLogo}>
            <img width="200px" src={logoBieffe} alt="Logo Bieffe" />
          </Box>
          <Box className={classes.boxLogo}>
            <img width="200px" src={logoPeels} alt="Logo Peels" />
          </Box>
          <Box className={classes.boxLogo}>
            <img width="200px" src={logoFly} alt="Logo Fly" />
          </Box>
          <Box className={classes.boxLogo}>
            <img width="200px" src={logoPolisport} alt="Logo Polisport" />
          </Box>
          <Box className={classes.boxLogo}>
            <img width="200px" src={logoCatlike} alt="Logo Catlike" />
          </Box>

          <Box className={classes.boxIcon}>
            <Box className={classes.icon}>
              <img width="35px" src={iconeFacebook} alt="icone Facebook" />
            </Box>
            <Box className={classes.icon}>
              <img width="35px" src={iconeInstagram} alt="icone Instagram" />
            </Box>
            <Box className={classes.icon}>
              <img width="35px" src={iconeYoutube} alt="icone Youtube" />
            </Box>
            <Box className={classes.icon}>
              <img width="35px" src={iconeLinkedIn} alt="icone LinkedIn" />
            </Box>
          </Box>

          <Typography variant="h6" style={{ margin: '20px' }}>
            @2021 - Todos os direitos reservados.
          </Typography>
        </Grid>
      </Slide>
    </Hidden>
  );
}

export default ImageComponent;
