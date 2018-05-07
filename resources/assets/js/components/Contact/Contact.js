import React, {Component} from 'react';
import './parts/Map'
import './parts/Form'
import MapLeaflet from "./parts/Map";
import Form from "./parts/Form";
import './scss/Contact.scss'
import {newData} from "../../actions/contact";

class ContactMe extends Component {



    render() {
        return (
            <div className="contact_page_container for_fade ">
                <Form/>
                <MapLeaflet/>
            </div>
        )
    }

}

export default ContactMe;
