import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, Grid, Grow, TextField } from '@material-ui/core';

import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';

import { useStyles } from './styles';
import { useHistory } from 'react-router';
import { useSidebar } from '../../../hooks/useSidebar';

import { api } from '../../../services/api';

type FormProps = {
  disciplina: string;
  descricao: string;
};

export function NewDiscipline() {
  const classes = useStyles();

  const history = useHistory();

  const { handleSubmit } = useForm();

  const { isMobile } = useSidebar();

  const disciplina = useRef({} as any);
  const descricao = useRef({} as any);
  const formRef = useRef({} as any);

  async function onSubmit(data: FormProps) {
    await api
      .post('/creatediscipline', {
        disciplina: disciplina.current.value,
        descricao: descricao.current.value,
      })
      .then(() => {
        formRef.current.reset();
      });
  }

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        {!isMobile && <Sidebar />}
        <div className={classes.boxWrapper}>
          <div className={classes.box}>
            <Grow in={true} timeout={1000}>
              <Grid className={classes.grid}>
                <div className={classes.span}>
                  <span>Nova disciplina</span>
                </div>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                  <Box className={classes.input}>
                    <TextField
                      variant="outlined"
                      placeholder="Nome da disciplina"
                      inputRef={disciplina}
                      color="primary"
                    />
                    <br />
                    <TextField
                      variant="outlined"
                      placeholder="Descrição da disciplina"
                      multiline
                      rows={5}
                      inputRef={descricao}
                    />
                  </Box>
                  <div className={classes.button}>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: '#990000',
                        color: '#FFFFFF',
                        width: '200px',
                      }}
                    >
                      Criar
                    </Button>
                    <Button
                      type="button"
                      style={{
                        backgroundColor: '#CA285A',
                        color: '#FFFFFF',
                        width: '200px',
                      }}
                      onClick={() => history.push('/aluno')}
                    >
                      Voltar
                    </Button>
                  </div>
                </form>
              </Grid>
            </Grow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDiscipline;
