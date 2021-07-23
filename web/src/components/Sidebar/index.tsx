import { useStyles } from './styles';

import {
  RiGroupLine,
  RiUserSettingsLine,
  RiSettings5Line,
} from 'react-icons/ri';

import { TiTicket } from 'react-icons/ti';
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
            <a href="/aluno">Disciplinas</a>
          </div>
        </div>
        <div className={classes.groupItem}>
          <TiTicket size={24} />
          <div className={classes.menuItem}>
            <a href="/aluno">Dúvidas</a>
          </div>
        </div>
      </div>
      <div className={classes.boxConfig}>
        <span>Painel de Controle</span>
        <div className={classes.groupItem}>
          <RiUserSettingsLine size={24} />
          <div className={classes.menuItem}>
            <a href="/aluno">Meu perfil</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
