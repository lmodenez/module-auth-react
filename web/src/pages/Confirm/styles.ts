import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#FFFFFF',
    color: 'black',
    width: '45%',
    height: '220px',
    borderRadius: '20px',
    boxShadow: '2px 2px white',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      height: '150px',
    },
  },
  text: {
    fontWeight: 'bold',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  boxButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    transition: '0.2s ease-in-out all',
    marginTop: '1rem',
    '&:hover': {
      opacity: '90%',
      transform: 'scale(1.02)',
    },
  },
}));
