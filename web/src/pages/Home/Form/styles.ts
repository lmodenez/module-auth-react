import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  boxForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '2rem',
  },
  boxButton: {
    display: 'flex',
    marginTop: '1rem',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem',
    },
  },
  buttonStyle: {
    width: '70%',
    marginTop: '1rem',
    color: 'white',
    transition: '0.2s ease-in-out all',

    '&:hover': {
      opacity: '90%',
      transform: 'scale(1.02)',
    },
  },
  input: {
    width: '75%',
    height: 'auto',
    marginTop: '0.5rem',
    color: 'black',
  },

  inputLabel: {
    '&:valid + fieldset': {
      borderColor: '#e0b116',
    },
  },
}));
