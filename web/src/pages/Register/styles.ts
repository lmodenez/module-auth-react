import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#FFFFFF',
    color: '#1C2133',
    width: '700px',
    height: '800px',
    borderRadius: '20px ',
    [theme.breakpoints.down('lg')]: {
      width: '650px',
      height: '850px',
    },
    [theme.breakpoints.down('md')]: {
      width: '600px',
      height: '700px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: 'auto',
    },
  },
  boxImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
  },
  text: {
    fontWeight: 'bold',
    color: '#1C2133',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
}));
