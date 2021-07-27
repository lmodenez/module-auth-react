import { useStyles } from './styles';

import { RiUserSettingsLine } from 'react-icons/ri';

import { TiTicket } from 'react-icons/ti';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function SidebarNav() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.boxGeral}>
        <span>Geral</span>
        <Link to="/aluno">
          <div className={classes.groupItem}>
            <TiTicket size={24} />
            <p>Disciplinas</p>
          </div>
        </Link>
        <Link to="/ops">
          <div className={classes.groupItem}>
            <AiOutlineQuestionCircle size={24} />
            <p>Dúvidas</p>
          </div>
        </Link>
      </div>
      <div className={classes.boxConfig}>
        <span>Painel de Controle</span>
        <Link to="/ops">
          <div className={classes.groupItem}>
            <RiUserSettingsLine size={24} />
            <p>Meu perfil</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export { SidebarNav };
