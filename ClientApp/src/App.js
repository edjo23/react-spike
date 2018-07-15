import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import CssBaseline from '@material-ui/core/CssBaseline';
import routes from './routerService';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Layout>
          {routes.map(o => (
            <Route key={o.path} exact={o.exact} path={o.path} component={o.component} />            
          ))}
        </Layout>
      </React.Fragment>
    );
  }
}
