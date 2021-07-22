import { FaSearch } from 'react-icons/fa';

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Cached from '@material-ui/icons/Cached';

import { Avatar, Badge } from '@material-ui/core';

import { useStyles } from './styles';

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.searchBox}>
        <input type="text" placeholder="Buscar na plataforma" />
        <FaSearch size={24} color="gray" />
      </div>
      <div className={classes.profileBox}>
        <Cached />
        <Badge badgeContent={4} color="secondary">
          <NotificationsActiveIcon />
        </Badge>
        <Avatar style={{ color: 'white', backgroundColor: '#0047B3' }}>
          LP
        </Avatar>
      </div>
    </div>
  );
}

export { Header };
