import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '15rem',
    marginLeft: '1rem',
    alignItems: 'center',

    '& svg, img': {
      marginLeft: '1rem',
    },
  },
}));
