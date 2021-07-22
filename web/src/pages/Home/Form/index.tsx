import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { useAuth } from '../../../hooks/useAuth';

type FormProps = {
  login: string;
  password: string;
};

export function Form() {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, control } = useForm();
  const { handleLogin } = useAuth();

  const onSubmit = async (data: FormProps) => {
    await handleLogin(data.login, data.password);
  };

  return (
    <form className={classes.boxForm} onSubmit={handleSubmit(onSubmit)}>
      {/* Input Username */}
      <Controller
        name="login"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Informe seu usuário ou e-mail"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            color="primary"
            className={classes.input}
            InputProps={{
              style: { color: 'black' },
            }}
            InputLabelProps={{ className: classes.inputLabel }}
          />
        )}
        rules={{
          required: 'Usuário/E-mail é obrigatório',
        }}
      />

      {/* Input Password */}
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Informe sua senha"
            type="password"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            color="primary"
            className={classes.input}
          />
        )}
        rules={{
          required: 'Senha é obrigatório',
          minLength: {
            value: 6,
            message: 'Senha precisa ter no mínimo 6 caracteres',
          },
        }}
      />

      <Box className={classes.boxButton}>
        <Button
          type="submit"
          variant="contained"
          className={classes.buttonStyle}
          style={{ backgroundColor: '#0047B3' }}
        >
          Entrar
        </Button>
        <Button
          type="button"
          variant="contained"
          className={classes.buttonStyle}
          style={{ backgroundColor: '#e0b116' }}
          onClick={() => {
            history.push('/cadastro');
          }}
        >
          Criar conta
        </Button>

        <Button
          type="button"
          variant="contained"
          className={classes.buttonStyle}
          style={{ backgroundColor: '#c84118' }}
          onClick={() => history.push('/recuperarsenha')}
        >
          Recuperar senha
        </Button>
      </Box>
    </form>
  );
}

export default Form;
