import React, { Component } from 'react'
import { Link } from '@reach/router'
import API from './API'

class Footer extends Component {

    render(){
        var {currentUser,active} = this.props
        console.log(active)
        var photoFallback = '/images/user-fallback.png'

        return(
            <footer className={active? 'footer active': 'footer'}>
                <div className="user-info">
                    <div className="user-profile">
                        {currentUser ? (
                            <>
                            <div className="profile-image">
                                <img src={currentUser.photo ? API.serverUrl+currentUser.photo : photoFallback} alt=""/>
                            </div>
                        <p><span>Welcome</span> {currentUser.name}</p>
                            </>
                            ) : null
                        }
                    </div>
                    <div className="logo">
                        <img src="/images/shu-logo-long.png" alt="Logo"/>
                    </div>
                </div>
                <div className="nav">
                    <Link to="types">
                        <i className="fas fa-home"></i>
                    </Link>
                    <Link to="listings">
                        <i className="fas fa-compass"></i>
                    </Link>
                    {
                        currentUser ? (
                            <Link to="/user/profile"><i className="fas fa-user"></i></Link>
                        ) : (
                            <Link to="users/authenticate"><i className="fas fa-user"></i></Link>
                        )
                    }
                </div>
            </footer>
        )
    }
}

export default Footer

