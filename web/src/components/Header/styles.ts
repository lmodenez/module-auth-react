import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#003380',
    width: '100%',
    height: '80px',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',

    '& img': {
      width: '150px',
    },
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '250px',
    height: '45%',
    border: '1px solid #ccc',
    borderRadius: '20px',
    justifyContent: 'space-around',

    '& input': {
      outline: 'none',
      border: 'none',
      fontSize: '100%',
    },
  },
  profileBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '200px',
  },
}));
