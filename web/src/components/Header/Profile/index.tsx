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
} from '@material-ui/core';

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Cached from '@material-ui/icons/Cached';

import { useStyles } from './styles';

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
      <Cached
        onClick={() => window.location.reload()}
        style={{ cursor: 'pointer' }}
      />
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
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="/">Sair</a>
                  </MenuItem>
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
