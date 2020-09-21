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

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      hasFooter: false,
    }
  }

  setHasFooter = (state) => {
    this.setState({hasFooter:state})
  }

  render(){
    var {hasFooter} = this.state
    var footerRoutes = ['types','listings','listing/:id/description','listings/create']
    return (
      <div className="App">
        <Location>
            {({ location }) => (
              <Transition
              native
              items={location}
              keys={location.pathname}
              from={{opacity: 0 }}
              enter={{opacity: 1 }}
              leave={{opacity: 0 }}>
                {(loc, state) => style => (
                  <Router location={location}>
                    <RouteWelcome style={style} path="/"/>
                    <RouteLogin style={style} path="users/authenticate"/>
                    <RouteAddUser path="users/create"/>
                    <RouteTypes path="types"/>
                    <RouteListings path="listings"/>
                    <RouteListingDescription path="listing/:id/description"/>
                    <RouteAddListing path="listings/create"/>
                    <RouteUpdateListing path="listings/:id/edit"/>
                    <RouteProfile path="user/profile"/>
                    <RouteUpdateUser path="users/:id/edit"/>
                    <RouteWelcome default/>
                  </Router>
                )}

              </Transition>
            )}
          </Location>
          {
            footerRoutes.map(route=>{
              return (
                <Match path={route}>
                  {props =>
                    props.match ? (
                      <Footer/>
                    ): null
                  }
                </Match>
              )
            })
          }

      </div>
    );
  }
}

export default App;
