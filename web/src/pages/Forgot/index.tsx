import { Box, Button, Typography, TextField, Zoom } from '@material-ui/core';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useStyles } from './styles';

import {
  handleSendEmailSuccess,
  handleSendEmailError,
} from '../../utils/Toast';

import { api } from '../../services/api';

type ForgotPasswordProps = {
  email: string;
};

export function ForgotPassword() {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: ForgotPasswordProps) => {
    try {
      await api
        .post('mail', {
          email: data.email,
        })
        .then((res) => {
          if (res.status) handleSendEmailSuccess();
        });
    } catch (e) {
      if (e) handleSendEmailError();
    }
  };

  return (
    <div ref={null} className={classes.root}>
      <Zoom in={true} timeout={500}>
        <Box className={classes.content}>
          <Typography variant="h4" className={classes.text}>
            Recuperação de senha
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Informe seu e-mail"
                  className={classes.inputEmail}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message:
                    'Informe um formato de e-mail válido Ex: exemplo@exemplo.com',
                },
              }}
            />
            <Box className={classes.boxButton}>
              <Button
                variant="contained"
                className={classes.button}
                style={{ backgroundColor: '#CA285A' }}
                color="primary"
                type="submit"
                disabled={false}
              >
                Enviar
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                style={{ backgroundColor: '#E9263F', width: '45%' }}
                color="primary"
                type="button"
                onClick={() => history.push('/')}
              >
                Voltar
              </Button>
            </Box>
          </form>
        </Box>
      </Zoom>
    </div>
  );
}

export default ForgotPassword;
