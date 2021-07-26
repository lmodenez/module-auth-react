import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',

    width: '15rem',
    marginLeft: '2rem',

    backgroundColor: '#FFFFFF',
  },
  boxGeral: {
    width: '100%',
    marginTop: '10%',
    color: '#900',

    '& span': {
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
  boxConfig: {
    width: '100%',
    marginTop: '10%',
    color: '#900',

    '& span': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },
  groupItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: '15%',

    '& a': {
      marginLeft: '1rem',
    },

    transition: '0.2s ease all',

    '&:hover': {
      transform: 'scale(1.15)',
    },
  },
}));
