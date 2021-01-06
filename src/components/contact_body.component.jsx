import React from 'react'
import {connect} from "react-redux";

import { createUserStart} from "../redux/user/user.actions";
import {selectCurrentUser} from "../redux/user/user.selectors";

const {useState} = require("react");

const ContactBody =({user,createUserStart})=>{

    const[credentials,setCredentials]=useState({
        name: '',
        email: '',
        message: '',
    })

   const handleChange=(event) =>{
        let name = event.target.name;
        let value = event.target.value;
        setCredentials({
           ...credentials, [name]: value})


    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {message,name,email}=credentials;
        console.log("name is" + name)

        createUserStart(name, email, message)
    }



        return (

            <div className="container">

                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you
                            as soon as possible!</p>

                        <form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Name"
                                           value={credentials.name} onChange={handleChange} id="name" name='name'
                                           required
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Email Address"
                                           value={credentials.email} onChange={handleChange} name='email' id="email"
                                           required
                                           data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>

                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Message</label>
                                    <textarea rows="5" className="form-control" placeholder="Message"
                                              value={credentials.message} onChange={handleChange} name='message'
                                              id="message"
                                              required
                                              data-validation-required-message="Please enter a message."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <br/>
                            <div id="success"/>
                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                        </form>
                    </div>
                </div>
            </div>

        )

}

const mapStateToProps = state => ({
    user: selectCurrentUser(state)
})
const mapDispatchToProps = dispatch => ({
    createUserStart: (name, email, message) => dispatch(createUserStart({name, email, message}))
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactBody);