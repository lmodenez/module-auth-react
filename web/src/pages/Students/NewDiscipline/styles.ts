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
    height: 'auto',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginTop: '24px',
    padding: '24px',

    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  span: {
    color: 'black',
    fontSize: '32px',
    fontWeight: 'bold',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  input: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px',
  },

  button: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '16px',

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& button:nth-child(2)': {
        marginTop: '16px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& button:nth-child(2)': {
        marginTop: '16px',
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
