import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#FFFFFF',
    width: '600px',
    height: '700px',
    borderRadius: '20px ',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: {
      width: '500px',
      height: '500px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      height: 'auto',
    },
  },

  logo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
  },

  text: {
    fontWeight: 'bold',
    color: '#262A30',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '7rem',

    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
    },
  },
}));
