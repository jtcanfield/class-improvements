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
                <Route path="/canigrow-frontend/calendar/:plant" render={(props) => ( <PlantCalendar username={this.state.username}/> )}/>
                <Route path="/canigrow-frontend/plants/:plant" render={(props) => ( <Plantpage username={this.state.username}/> )}/>
                {/* <Route path="/plants/:plant" component={Plantpage} /> */}
                <Route path="/canigrow-frontend/login/password_reset" component={PasswordReset} />
                <Route path="/canigrow-frontend/login/authentication_request" component={AuthenticationRequest} />
                <Route path="/canigrow-frontend/user/:user" render={(props) => ( <Userpage /> )}/>
                <Route path="/canigrow-frontend/users"  component={Userlisting} />
                <Route path="/canigrow-frontend/login" render={(props) => ( <Login username={this.state.username}/> )}/>
                <Route path="/canigrow-frontend/logout" render={(props) => ( <Logout/> )}/>
                <Route path="/canigrow-frontend/edit/:user" render={(props) => ( <EditProfile/> )}/>
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/canigrow-frontend/register" component={Register} />
                {/* This redirects certain paths used on deployment. */}
                {["/home", "/canigrow-frontend/"].map((path,i) =>
                  <Route path={path} key={i} render={(props) => ( <Homepage allplantdata={this.state.allplantdata}/> )}/>
                )}
              </Switch>
            </BaseLayout>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
