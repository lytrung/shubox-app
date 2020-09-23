import React, { Component } from 'react';
import { Router, Match,Location } from "@reach/router"
import RouteWelcome from './RouteWelcome'
import RouteLogin from './RouteLogin'
import RouteAddUser from './RouteAddUser'
import RouteTypes from './RouteTypes'
import RouteListings from './RouteListings'
import RouteListingDescription from './RouteListingDescription'
import RouteAddListing from './RouteAddListing'
import RouteUpdateListing from './RouteUpdateListing'
import RouteProfile from './RouteProfile'
import RouteUpdateUser from './RouteUpdateUser'
import Footer from './Footer'
import './assets/css/style.css';
import API from './API';
import {Transition} from 'react-spring/renderprops'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="move" timeout={1000}>
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
)

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var footerlessRoutes = ['/','/users/authenticate','/users/create']
    return (
      <div className="App">
        <FadeTransitionRouter>
          <RouteWelcome path="/"/>
          <RouteLogin path="users/authenticate"/>
          <RouteAddUser path="users/create"/>
          <RouteTypes path="types"/>
          <RouteListings path="listings"/>
          <RouteListingDescription path="listing/:id/description"/>
          <RouteAddListing path="listings/create"/>
          <RouteUpdateListing path="listings/:id/edit"/>
          <RouteProfile path="user/profile"/>
          <RouteUpdateUser path="users/:id/edit"/>
          <RouteWelcome default/>
        </FadeTransitionRouter>
        <Location>
          {({ location }) => (
            <Footer active={!footerlessRoutes.includes(location.pathname)}/>
          )}
        </Location>
      </div>
    );
  }
}

export default App;