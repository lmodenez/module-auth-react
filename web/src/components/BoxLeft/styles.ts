import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ecf0f1',
    width: '400px',
    height: '650px',
    borderRadius: '20px 0 0 20px',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& img': {
      marginTop: '50%',
    },
  },
  boxLogo: {
    display: 'flex',
    flexDirection: 'column',
  },
  boxIcon: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '60%',
    marginTop: '50px',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
}));
