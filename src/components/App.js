import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import cookie from 'react-cookies';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import request from 'superagent';
import allReducers from '../reducers/indexReducer.js';
import BaseLayout from './Base-Layout.js';
import Homepage from './homepage.js';

const store = createStore(
    allReducers,
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="AppInsideProvider">
          <BrowserRouter>
            <BaseLayout>
              <Switch>
                <Route path="/" render={(props) => ( <Homepage/> )}/>
                <Route path="/" render={(props) => ( <Homepage/> )}/>
                <Route path="/" render={(props) => ( <Homepage/> )}/>
                <Route path="/" render={(props) => ( <Homepage/> )}/>
                <Route exact path="/" render={(props) => ( <Homepage/> )}/>
              </Switch>
            </BaseLayout>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
