import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '25%',
    height: '50%',
    border: '0',
    borderRadius: '20px',
    marginLeft: '2rem',

    '& svg': {
      marginRight: '16px',
    },

    '& input': {
      outline: 'none',
      border: 'none',
      fontSize: '90%',
      width: '100%',
      marginLeft: '24px',
      backgroundColor: '#FFFFFF',
      color: '#000000',

      '&::placeholder': {
        marginLeft: '24px',
        fontWeight: 'bold',
        color: '#a7a7a7',
      },
    },
  },
}));
