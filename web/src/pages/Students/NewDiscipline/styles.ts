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
    maxWidth: '740px',
    // alignItems: 'flex-end',
    marginTop: '32px',
  },
  grid: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginTop: '24px',
    padding: '24px',
  },
  span: {
    color: 'black',
    fontSize: '32px',
    fontWeight: 'bold',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  input: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px',
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
  },
}));
