import { toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

const handleRegisterSuccess = () => {
  injectStyle();
  toast.success(
    <div>
      ✅ <b>Cadastro realizado!</b>
      <br />
      <br />
      💌 <b>Acesso será liberado após confirmar o e-mail!</b>
    </div>,
    {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

const handleRegisterError = () => {
  injectStyle();
  toast.error(
    <div>
      ❌ <b>Falha ao realizar o cadastro!</b>
      <br />
      <br />
      <b>Usuário/E-mail já cadastrados!</b>
    </div>,
    {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

const handleSendEmailError = () => {
  injectStyle();
  toast.error(
    <div>
      ❌ <b>Falha ao enviar o e-mail!</b>
    </div>,
    {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

const handleSendEmailSuccess = () => {
  injectStyle();
  toast.success(
    <div>
      ✅ <b>E-mail enviado com sucesso!</b>
    </div>,
    {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

const handleSendNewPasswordError = () => {
  injectStyle();
  toast.error(
    <div>
      ❌ <b>Falha ao registrar nova senha! </b>
    </div>,
    {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

const handleSendNewPasswordSuccess = () => {
  injectStyle();
  toast.success(
    <div>
      ✅ <b>Nova senha registrada!</b>
    </div>,
    {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

const handleSingInError = () => {
  injectStyle();
  toast.error(
    <div>
      ❌ <b>Usuário/senha inválido!</b>
    </div>,
    {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

const handleWarnForCheckButton = () => {
  injectStyle();
  toast.warn(
    <div>
      {' '}
      <b style={{ color: 'white' }}>Aceite os "Termos de Serviços"!</b>
    </div>,
    {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

export {
  handleSendEmailSuccess,
  handleSendEmailError,
  handleSendNewPasswordError,
  handleSendNewPasswordSuccess,
  handleWarnForCheckButton,
  handleRegisterSuccess,
  handleRegisterError,
  handleSingInError,
};
