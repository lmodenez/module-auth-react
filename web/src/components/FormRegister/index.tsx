import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useStyles } from './styles';

import { api } from '../../services/api';

import {
  TextField,
  Button,
  Box,
  Typography,
  Checkbox,
  Dialog,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

import {
  handleWarnForCheckButton,
  handleRegisterSuccess,
  handleRegisterError,
} from '../../utils/Toast';
import ServiceTerm from '../../utils/Term';
import { AxiosResponse } from 'axios';

type FormProps = {
  name: string;
  surname: string;
  document: string;
  email: string;
  username: string;
  password: string;
};

export function Form() {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, control, reset } = useForm();
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);

  const onSubmit = async (data: FormProps) => {
    if (!check) {
      return handleWarnForCheckButton();
    } else {
      await api
        .post('/users', {
          nome: data.name,
          sobrenome: data.surname,
          cpf_cnpj: data.document,
          email: data.email,
          usuario: data.username,
          senha: data.password,
        })
        .then(async (res: AxiosResponse) => {
          if (res.status === 200) {
            setCheck(!check);

            await api
              .post('/mailconfirm', {
                email: data.email,
              })
              .then((response) => {
                if (response.status === 200) {
                  handleRegisterSuccess();
                }
              })
              .catch((error) => {
                handleRegisterError();
              });

            reset({
              name: '',
              surname: '',
              document: '',
              email: '',
              username: '',
              password: '',
            });
          }
        })
        .catch(() => {
          return handleRegisterError();
        });
    }
  };

  return (
    <form className={classes.content} onSubmit={handleSubmit(onSubmit)}>
      {/* Input Name */}
      <Box className={classes.boxName}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Nome"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              className={classes.input}
              size="small"
            />
          )}
          rules={{
            required: 'Nome ?? obrigat??rio',
          }}
        />

        {/* Input Surname */}
        <Controller
          name="surname"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Sobrenome"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              className={classes.input}
              size="small"
            />
          )}
          rules={{
            required: 'Sobrenome ?? obrigat??rio',
          }}
        />
      </Box>

      {/* Input CPF/CNPJ */}
      <Controller
        name="document"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="CPF/CNPJ (somente n??meros)"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            className={classes.input}
            size="small"
          />
        )}
        rules={{
          required: 'CPF/CNPJ ?? obrigat??rio',
          pattern: {
            value: /^([0-9]{11})|([0-9]{14})/i,
            message: 'Informe somente n??meros Ex: 00000000000',
          },
        }}
      />

      {/* Input Email */}
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="E-mail"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            className={classes.input}
            size="small"
          />
        )}
        rules={{
          required: 'E-mail ?? obrigat??rio',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Informe um formato de e-mail v??lido Ex: example@mail.com',
          },
        }}
      />

      {/* Input Username */}
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Usu??rio"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            className={classes.input}
            size="small"
          />
        )}
        rules={{
          required: 'Usu??rio ?? obrigat??rio',
        }}
      />

      {/* Input Password */}
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            className={classes.input}
            size="small"
          />
        )}
        rules={{
          required: 'Senha ?? obrigat??rio',
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            message:
              'Sua senha precisa ter no m??nimo 8 caracteres contendo n??meros, s??mbolos, letras mai??sculas e min??sculas Ex: Exemplo@123',
          },
          minLength: {
            value: 8,
            message: 'Senha precisa ter no m??nimo 8 caracteres',
          },
        }}
      />

      <Box className={classes.boxService}>
        <Checkbox
          checked={check}
          onChange={() => setCheck(!check)}
          name="checkedB"
          color="primary"
        />
        <Typography variant="h6" style={{ fontSize: '0.9rem' }}>
          Li e aceito os{' '}
          <button
            type="button"
            className={classes.buttonTerm}
            onClick={() => setOpen(true)}
          >
            Termos de Servi??os
          </button>
          <div>
            <Dialog
              onClose={() => setOpen(false)}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogContent dividers>
                <Typography component={'span'} gutterBottom>
                  {/* Component Term of Service */}
                  <ServiceTerm />
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={() => {
                    setOpen(false);
                    setCheck(true);
                  }}
                  color="primary"
                >
                  Aceito
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Typography>
      </Box>

      <Button
        variant="contained"
        className={classes.button}
        style={{ backgroundColor: '#CA285A' }}
        type="submit"
      >
        Cadastrar
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        style={{
          backgroundColor: '#E9263F',
          width: '60%',
          marginBottom: '1rem',
        }}
        type="submit"
        onClick={() => history.push('/')}
      >
        Voltar
      </Button>
    </form>
  );
}

export default Form;
