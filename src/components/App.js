import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import cookie from 'react-cookies';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import request from 'superagent';
import allReducers from '../reducers/indexReducer.js';

const store = createStore(
    allReducers,
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="AppInsideProvider">
          <BrowserRouter>
            <BaseLayout template={this.state.template}>
              <Switch>
                <Route exact path="/canigrow-frontend/" render={(props) => ( <Homepage allplantdata={this.state.allplantdata}/> )}/>
              </Switch>
            </BaseLayout>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
