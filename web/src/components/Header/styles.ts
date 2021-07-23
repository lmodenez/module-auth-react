import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: '80px',
    position: 'relative',

    display: 'flex',
    flexDirection: 'row',

    '& img': {
      width: '150px',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
  },

  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto',
    width: '100%',
  },
}));
