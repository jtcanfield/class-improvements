import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import cookie from 'react-cookies';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import request from 'superagent';
import allReducers from '../reducers/indexReducer.js';
import BaseLayout from './Base-Layout.js';
import Homepage from './Homepage.js';
import About from './About.js';
import Contact from './Contact.js';
import Events from './Events.js';
import IWOC from './IWOC.js';
import News from './News.js';

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
                <Route path="/about" render={(props) => ( <About/> )}/>
                <Route path="/news" render={(props) => ( <News/> )}/>
                <Route path="/contact" render={(props) => ( <Contact/> )}/>
                <Route path="/events" render={(props) => ( <Events/> )}/>
                <Route path="/iwoc" render={(props) => ( <IWOC/> )}/>
                <Route path="/" render={(props) => ( <Homepage/> )}/>
              </Switch>
            </BaseLayout>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
