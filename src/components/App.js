import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from '../reducers/indexReducer.js';
import BaseLayout from './Base-Layout.js';
import Homepage from './Homepage.js';
import About from './About.js';
import Contact from './Contact.js';
import Events from './Events.js';
import IWOC from './IWOC.js';
import Donate from './Donate.js';
import Wfw from './Wfw.js';
import Gdc from './Gdc.js';
import Posters from './Posters.js';
import Redirectpage from './Redirect.js';
import {init as firebaseInit} from './javascripts/firebase.js'

const store = createStore(
    allReducers,
);

class App extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }
  render() {
    // <Route path="/gdcposter.jpg" render={(props) => ( "./posters/gdcposter.jpg" )}/>
    return (
      <Provider store={store}>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/about" render={(props) => ( <About/> )}/>
              <Route path="/contact" render={(props) => ( <Contact/> )}/>
              <Route path="/events" render={(props) => ( <Events/> )}/>
              <Route path="/iwoc" render={(props) => ( <IWOC/> )}/>
              <Route path="/gdc" render={(props) => ( <Gdc/> )}/>
              <Route path="/wfw" render={(props) => ( <Wfw/> )}/>
              <Route path="/donate" render={(props) => ( <Donate/> )}/>
              <Route path="/posters" render={(props) => ( <Posters/> )}/>
              <Route path="/home" render={(props) => ( <Homepage/> )}/>
              <Route path="/gdcflyer.jpg" render={(props) => ( <img alt="GDC Flyer" src="./gdcflyer.jpg"/> )}/>
              <Route path="/iepostercolor.jpg" render={(props) => ( <img alt="Community Defense Poster" src="./iepostercolor.jpg"/> )}/>
              <Route path="/iwwantinaziposter.jpg" render={(props) => ( <img alt="Anti-Nazi Poster" src="./iwwantinaziposter.jpg"/> )}/>
              <Route path="" render={(props) => ( <Redirectpage/> )}/>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
