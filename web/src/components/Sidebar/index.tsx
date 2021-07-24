import { useStyles } from './styles';

import {
  RiGroupLine,
  RiUserSettingsLine,
  RiSettings5Line,
} from 'react-icons/ri';

import { TiTicket } from 'react-icons/ti';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.boxGeral}>
        <span>Geral</span>
        <Link to="/aluno">
          <div className={classes.groupItem}>
            <TiTicket size={24} />
            <div className={classes.menuItem}>
              <a href="/aluno">Disciplinas</a>
            </div>
          </div>
        </Link>
        <Link to="/ops">
          <div className={classes.groupItem}>
            <AiOutlineQuestionCircle size={24} />
            <div className={classes.menuItem}>Dúvidas</div>
          </div>
        </Link>
      </div>
      <div className={classes.boxConfig}>
        <span>Painel de Controle</span>
        <Link to="/ops">
          <div className={classes.groupItem}>
            <RiUserSettingsLine size={24} />
            <div className={classes.menuItem}>Meu perfil</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export { Sidebar };
