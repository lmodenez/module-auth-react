import { Hidden } from '@material-ui/core';

import Logo from './Logo';
import Profile from './Profile';
import Search from './Search';

import { useStyles } from './styles';

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <div className={classes.search}>
          <Hidden only={['sm', 'xs']}>
            <Search />
          </Hidden>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export { Header };
