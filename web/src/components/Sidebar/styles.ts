import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    width: '18%',
    maxWidth: '18%',
    height: '100vh',
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boxGeral: {
    width: '100%',
    maxWidth: '70%',
    marginTop: '10%',
    '& span': {
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
  boxConfig: {
    width: '100%',
    maxWidth: '70%',
    marginTop: '10%',
    '& span': {
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
  groupItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '32px',
    marginLeft: '16px',
    marginTop: '15%',

    transition: '0.3s ease all',

    '&:hover': {
      transform: 'scale(1.15)',
      backgroundColor: '#ff0d0d',
      borderRadius: '10px',
    },
  },
  menuItem: {
    marginLeft: '16px',
  },
}));
