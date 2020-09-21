import React, { Component } from 'react'
import { navigate, Link } from '@reach/router'
import {Keyframes,animated,Spring} from 'react-spring/renderprops'
import API from './API'


// const ContainerAnimation = Keyframes.Spring({
//     appear: [{ x: 0, opacity: 1, from: { x: -100, opacity: 0 }}]
// })

const FormInputAnimation = Keyframes.Trail({
    appear: [{ x: 0, opacity: 1,delay: 500, from: { x: -100, opacity: 0 }}]
})

const formInputs = [
    <div className="form-group">
        <label htmlFor="user-name">User Name:</label>
        <input type="text" name="user-name" id="user-name" placeholder="Enter your username"/>
    </div>,
    <div className="form-group">
        <label htmlFor="user-password">Password:</label>
        <input type="password" name="user-password" id="user-password" placeholder="Enter your password"/>
    </div>,
    <div className="form-group with-btn">
        <button type="submit" className="btn btn-gray">Sign in</button>
        <Link to="/users/create" className="signup-link">dont’ have an account? no problem, sign up here</Link>
    </div>
]

class RouteLogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            errorMessage: null
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);
        var data = {
          username:formData.get('user-name'),
          password:formData.get('user-password'),
        }
    
        var {setCurrentUser} = this.props
    
        API.authenticate(data)
        .then(res => {
          var user = res.data
          return user
        })
        .then(user => {
          if(user){
            setCurrentUser(user)
            localStorage.setItem('userId',user.id)
            navigate('/user/profile')
          }else{
            this.setState({errorMessage:'Wrong username or password, please try again'})
          }
        })
    
      }

    render(){
        var {errorMessage} = this.state
        var {style} = this.props
        return(
            <animated.main style={{...style}}>
                <section className="section route-user-login">
                    <div className="container">
                        <img src="/images/shu-logo-small.png" alt=""/>
                        <h1>Account Sign In</h1>
                        <hr className="divider"/>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}} className="pure-form pure-form-stacked">
                        
                            <FormInputAnimation
                                native
                                items={formInputs}
                                keys={formInputs.map((_, i) => i)}
                                state={'appear'}>
                                {(item, i) => ({ x, ...props }) => (
                                <animated.div
                                    style={{
                                    transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                                    ...props,
                                    }}>
                                    {item}    
                                </animated.div>
                                )}
                            </FormInputAnimation>
                            {errorMessage ? (<p className="form-message">{errorMessage}</p>) : null}
                        </form>
                    </div>
                </section>
            </animated.main>




        )
    }
}

export default RouteLogin