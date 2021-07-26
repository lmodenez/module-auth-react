import { useStyles } from './styles';

import { logoPecege } from '../../../utils/Images';

import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { useSidebar } from '../../../hooks/useSidebar';

export function Logo() {
  const classes = useStyles();

  const { isMenuOpen, handleMenuOpen, handleMenuClose } = useSidebar();

  return (
    <div className={classes.container}>
      {isMenuOpen ? (
        <MenuOpenIcon
          fontSize="large"
          style={{ cursor: 'pointer', color: 'white' }}
          onClick={handleMenuOpen}
        />
      ) : (
        <MenuIcon
          fontSize="large"
          style={{ cursor: 'pointer', color: 'white' }}
          onClick={handleMenuClose}
        />
      )}

      <img src={logoPecege} alt="Logo Pecege" />
    </div>
  );
}

export default Logo;
