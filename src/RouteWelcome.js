import React, { Component } from 'react'
import { Link, navigate } from "@reach/router"
import {animated} from 'react-spring/renderprops'

class RouteWelcome extends Component {
    render(){
        var {style} = this.props
        return(
            <animated.main style={{...style}}>
                <section className="section route-start">
                    <div className="container">
                        <img src="/images/shu-logo-large.png" alt="Logo"/>
                        <button className="btn btn-gray" onClick={()=> {navigate('/types')}}>Browse now</button>
                        <hr className="divider"/>
                        <button className="btn btn-red" onClick={()=> {navigate('/users/authenticate')}}>Sign in</button>
                        <Link to="/users/create" className="signup-link">dont’ have an account? no problem, sign up here</Link>
                    </div>
                </section>
            </animated.main>
        )
    }
}

export default RouteWelcome