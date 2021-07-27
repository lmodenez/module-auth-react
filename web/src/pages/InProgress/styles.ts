import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ecf0f1',
    width: '100%',
    height: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',

    width: 'auto',
    height: 'calc(100vh - 80px)',
  },
  boxWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    height: 'calc(100vh - 80px)',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1480px',
    alignItems: 'center',
    marginTop: '32px',
  },
  grid: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '70%',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '24px',

    '& span': {
      color: 'black',
      fontSize: '36px',
      fontWeight: 'bold',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      wordWrap: 'break-word',
    },

    [theme.breakpoints.down('xs')]: {
      width: '80%',

      '& span': {
        fontSize: '16px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',

      '& span': {
        fontSize: '16px',
      },
    },
  },

  hide: {
    display: 'none',
  },

  main: {
    flexGrow: 1,
    marginLeft: '-15rem',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
