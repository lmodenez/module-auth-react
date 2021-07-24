import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: '200px',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',

      '& span': {
        marginLeft: '24px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',

      '& span': {
        marginLeft: '24px',
      },
    },
  },
}));
