import { useStyles } from './styles';

import { logoPecege } from '../../../utils/Images';

export function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={logoPecege} alt="Logo Starplast" />
    </div>
  );
}

export default Logo;
