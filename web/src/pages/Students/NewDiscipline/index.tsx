import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from '@material-ui/core';

import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';

import { useStyles } from './styles';

type FormProps = {
  disciplina: string;
  descricao: string;
};

export function NewDiscipline() {
  const classes = useStyles();
  const { handleSubmit } = useForm();
  const disciplina = useRef({} as any);
  const descricao = useRef({} as any);

  function onSubmit(data: FormProps) {
    console.log(disciplina.current.value);
    console.log(descricao.current.value);
  }

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        <div className={classes.boxWrapper}>
          <div className={classes.box}>
            <Grid className={classes.grid}>
              <div className={classes.span}>
                <span>Nova disciplina</span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                </div>
              </form>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDiscipline;
