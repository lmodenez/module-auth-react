import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ConfirmRegister from './pages/ConfirmRegister';
import Tickets from './pages/Tickets';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" exact component={Register} />
        <Route path="/recuperarsenha" exact component={ForgotPassword} />
        <Route path="/resetarsenha/:token" exact component={ResetPassword} />
        <Route path="/confirm/:token" exact component={ConfirmRegister} />
        <Route path="/chamados" exact component={Tickets} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
