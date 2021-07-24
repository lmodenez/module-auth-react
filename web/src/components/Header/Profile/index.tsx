import { useRef, useState } from 'react';

import {
  Avatar,
  Badge,
  Button,
  MenuItem,
  ClickAwayListener,
  Paper,
  MenuList,
  Grow,
  Popper,
  Hidden,
} from '@material-ui/core';

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Cached from '@material-ui/icons/Cached';

import { useStyles } from './styles';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Profile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <Hidden only={['sm', 'xs']}>
        <Cached
          onClick={() => window.location.reload()}
          style={{ cursor: 'pointer' }}
        />
      </Hidden>
      <Hidden only={['xl', 'lg']}>
        <AiOutlineMenu
          size={32}
          color="white"
          style={{ cursor: 'pointer' }}
          onClick={() => console.log('menu')}
        />
      </Hidden>
      <Badge badgeContent={412} color="secondary">
        <NotificationsActiveIcon />
      </Badge>
      <Button ref={anchorRef} onClick={handleToggle}>
        <Avatar
          style={{
            color: 'white',
            backgroundColor: '#CA285A',
            cursor: 'pointer',
          }}
        >
          LP
        </Avatar>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper elevation={3}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <Link to="/ops">
                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  </Link>
                  <Link to="/">
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                  </Link>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default Profile;
