import { Box, Button, Typography, TextField, Zoom } from '@material-ui/core';

import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useStyles } from './styles';

import {
  handleSendNewPasswordError,
  handleSendNewPasswordSuccess,
} from '../../utils/Toast';

import { api } from '../../services/api';
import { AxiosResponse } from 'axios';

type ResetPasswordProps = {
  senha: string;
};

export function ResetPassword() {
  const classes = useStyles();
  const history = useHistory();
  const token = useParams();
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: ResetPasswordProps) => {
    await api
      .post('reset', {
        novaSenha: data.senha,
        userToken: token,
      })
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          handleSendNewPasswordSuccess();
          setTimeout(() => {
            history.push('/');
          }, 2000);
        }
      })
      .catch(() => {
        handleSendNewPasswordError();
      });
  };

  return (
    <div className={classes.root}>
      <Zoom in={true} timeout={500}>
        <Box className={classes.content}>
          <Typography variant="h4" className={classes.text}>
            Informe sua nova senha
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="senha"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Informe sua nova senha"
                  type="password"
                  className={classes.inputEmail}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: 'Informar sua nova senha é obrigátorio',
                minLength: {
                  value: 6,
                  message: 'Senha precisa ter no mínimo 6 caracteres',
                },
              }}
            />
            <Box className={classes.boxButton}>
              <Button
                variant="contained"
                className={classes.button}
                style={{ backgroundColor: '#64991e' }}
                color="primary"
                type="submit"
              >
                Enviar
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                style={{ backgroundColor: '#2E76CF', width: '45%' }}
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

export default ResetPassword;
