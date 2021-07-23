import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '500px',
    border: '0',
    borderRadius: '20px',

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
        color: '#a7a7a7',
      },
    },
  },
}));
