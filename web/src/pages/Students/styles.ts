import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ecf0f1',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',

    margin: '0 auto',
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
    alignItems: 'flex-end',
    marginTop: '32px',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  grid: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '24px',
    marginBottom: '8px',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  gridItemTitle: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '80%',
    marginTop: '4px',
  },
  gridItemContent: {
    display: 'block',
    marginTop: '16px',
    marginBottom: '16px',
    width: '100%',
    maxWidth: '80%',
    wordWrap: 'break-word',
  },
  discipline: {
    color: '#FFFFFF',
    width: '80%',
    height: 'auto',
    marginTop: '16px',
    marginBottom: '16px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mobileBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',

    '& svg': {
      marginRight: '32px',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around',
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
