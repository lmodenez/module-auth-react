import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import ForgotPassword from './pages/Forgot';
import ResetPassword from './pages/Reset';
import ConfirmRegister from './pages/Confirm';
import Students from './pages/Students';
import NewDiscipline from './pages/Students/NewDiscipline';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" exact component={Register} />
        <Route path="/recuperarsenha" exact component={ForgotPassword} />
        <Route path="/resetarsenha/:token" exact component={ResetPassword} />
        <Route path="/confirm/:token" exact component={ConfirmRegister} />
        <Route path="/aluno" exact component={Students} />
        <Route path="/aluno/novadisciplina" exact component={NewDiscipline} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
