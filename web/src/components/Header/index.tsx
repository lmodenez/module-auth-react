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
          <Search />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export { Header };
