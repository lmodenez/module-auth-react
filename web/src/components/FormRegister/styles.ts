import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: '2rem',
  },
  input: {
    width: '70%',
    height: 'auto',
    marginTop: '0.5rem',
    fontSize: '0.5rem',
  },
  boxName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    '&:first-child': {
      margin: '0.2rem',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
    },
  },
  boxService: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    width: '65%',
    marginTop: '16px',
    color: 'white',
    transition: '0.2s ease-in-out all',
    '&:hover': {
      opacity: '90%',
      transform: 'scale(1.02)',
    },
  },
  buttonTerm: {
    background: 'none',
    textDecoration: 'underline',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#2E76CF',
    cursor: 'pointer',
    outline: 'inherit',
    border: 'none',
  },
}));
