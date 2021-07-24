import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ecf0f1',
    width: '100%',
    height: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  boxWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1480px',
    alignItems: 'center',
    marginTop: '32px',
  },
  grid: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '70%',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '24px',

    '& span': {
      color: 'black',
      fontSize: '36px',
      fontWeight: 'bold',
      alignItems: 'center',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));
