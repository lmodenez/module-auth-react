import { useStyles } from './styles';

import { TiTicket } from 'react-icons/ti';
import {
  RiGroupLine,
  RiUserSettingsLine,
  RiSettings5Line,
} from 'react-icons/ri';
import { FaUsersCog } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.boxGeral}>
        <span>Geral</span>
        <div className={classes.groupItem}>
          <TiTicket size={24} />
          <div className={classes.menuItem}>
            <a href="/">Chamados</a>
          </div>
        </div>
        <div className={classes.groupItem}>
          <RiUserSettingsLine size={24} />
          <div className={classes.menuItem}>
            <a href="/">Meu perfil</a>
          </div>
        </div>
      </div>
      <div className={classes.boxConfig}>
        <span>Painel de Controle</span>
        <div className={classes.groupItem}>
          <RiSettings5Line size={24} />
          <div className={classes.menuItem}>
            <a href="/">Suporte</a>
          </div>
        </div>
        <div className={classes.groupItem}>
          <RiGroupLine size={24} />
          <div className={classes.menuItem}>
            <a href="/">Usuários</a>
          </div>
        </div>
        <div className={classes.groupItem}>
          <AiOutlineUsergroupAdd size={24} />
          <div className={classes.menuItem}>
            <a href="/">Grupo de Acesso</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
