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
    alignItems: 'flex-end',
    marginTop: '32px',
  },
  grid: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '24px',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  gridItemTitle: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '80%',
    marginTop: '4px',
  },
  gridItemContent: {
    marginTop: '16px',
    marginBottom: '16px',
    width: '100%',
    maxWidth: '80%',
  },
  discipline: {
    color: '#FFFFFF',
    width: '500px',
    height: 'auto',
    marginTop: '16px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
}));
