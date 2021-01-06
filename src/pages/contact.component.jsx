import React from 'react'
import ContactHeader from "../components/contact_header.component";
import ContactBody from "../components/contact_body.component";
class Contact extends React.Component{
    componentDidMount() {
    }

    render() {
        return(
            <div>
<ContactHeader/>
<ContactBody/>
            </div>
        )
    }
}
export default Contact;