import React from 'react'
import {Link} from "react-router-dom";

class  Navigation extends React.Component{
    // console.log("Nav"+title_about)
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/">{this.props.data?this.props.data.title_brand:"loading"}</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{this.props.data?this.props.data.title_home:"Loading"}</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">{this.props.data?this.props.data.title_about:"Loading"}</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">{this.props.data?this.props.data.title_contact:"Loading"}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
}

};
export default Navigation;