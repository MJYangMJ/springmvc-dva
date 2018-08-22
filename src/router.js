import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users.js';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" exact component={IndexPage} />
        <Route path="/users" exact component={Users} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}



export default RouterConfig;
