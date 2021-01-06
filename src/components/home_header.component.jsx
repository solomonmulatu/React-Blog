import React from 'react'
import Background from '../img/home-bg.jpg'
class Header extends React.Component{
    render(){
        console.log("header is"+this.props.HomeData)
        return(
            <header className="masthead" style={{backgroundImage:"url("+Background+")"}}>
                <div className="overlay"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{this.props.HomeData?this.props.HomeData.Home_Header.title:"Loading"}</h1>
                                <span className="subheading">{this.props.HomeData?this.props.HomeData.Home_Header.sub_title:"Loading"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}
export default Header;