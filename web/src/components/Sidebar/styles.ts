import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    width: '18%',
    maxWidth: '18%',
    height: '100vh',
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boxGeral: {
    width: '100%',
    maxWidth: '70%',
    marginTop: '10%',
    '& span': {
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
  boxConfig: {
    width: '100%',
    maxWidth: '70%',
    marginTop: '10%',
    '& span': {
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
  groupItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: '15%',
  },
  menuItem: {
    marginLeft: '16px',
  },
}));
