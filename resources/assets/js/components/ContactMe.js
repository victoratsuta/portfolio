import React , {Component} from 'react';
import Menu from './Menu';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';

// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';


class ContactMe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            subject: "",
            body: "",
            errorClass :"",
        }
    }
    DrawMap (){
        let mymap = L.map('mapid', {zoomControl: false}).setView([44.58, 33.49], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmljdG9yYXRzdXRhIiwiYSI6ImNqOW9iNnJjczJnaW8zM3MyeDdrcXBuN3oifQ.gIWOmeqEuCRHKmWb_AMXFQ', {
            maxZoom: 18,
            id: 'mapbox.dark',
            accessToken: 'your.mapbox.access.token',
        }).addTo(mymap);
        let greenIcon = L.icon({
            iconUrl: '../imgs/location-pin.png',
            shadowUrl: '',

            iconSize: [38, 40], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        L.marker([44.58, 33.49], {icon: greenIcon}).addTo(mymap);
    }
    _create () {
        $.ajaxSetup({

            headers: {

                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

            }

        });
        return $.ajax({
            url: '/mail',
            type: 'POST',
            data: {
                username: this.state.username,
                subjectq: this.state.subject,
                email: this.state.email,
                body: this.state.body
            },

        })
    }
    _onSubmit (e) {
        e.preventDefault();

        var errors = this._validate();

        if(errors==false){
            return;
        }

        var xhr = this._create();

        this.refs.contactForm.reset();
        this.refs.username.classList.remove('goodInput');
        this.refs.email.classList.remove('goodInput');
        this.refs.subject.classList.remove('goodInput');
        this.refs.body.classList.remove('goodInput');

        var state = {};

        state.username='';
        state.email='';
        state.subject='';
        state.body='';
        this.setState(state);

        xhr.done(this.showSuccessAlert())

    }
    showSuccessAlert(e) {
        Alert.success('Message Sent', {
            position: 'top-right',
            effect: 'scale',
            beep: false,
            timeout: 2000,
        });
    }

    _onKeyUp (e) {

        let state = {};
        let name = e.target.name;
        state[e.target.name] =  $.trim(e.target.value);
        this.setState(state, function(e){
            this._validate(name)
        });

    }

    _validate (name=null) {

        let resultValidation = true;

        if(name==null || name=='username') {

            if (this.state.username == ""){
                this.refs.username.classList.remove('goodInput');
                this.refs.username.classList.add('badInput');
                resultValidation =  false;
            }
            else {
                this.refs.username.classList.remove('badInput');
                this.refs.username.classList.add('goodInput');
            }

        }

        if(name==null || name=='email') {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (this.state.email == "" || !re.test(this.state.email)){
                this.refs.email.classList.remove('goodInput');
                this.refs.email.classList.add('badInput');
                resultValidation = false;
            }
            else {
                this.refs.email.classList.remove('badInput');
                this.refs.email.classList.add('goodInput');
            }
        }

        if(name==null || name=='subject') {

            if (this.state.subject == ""){
                this.refs.subject.classList.remove('goodInput');
                this.refs.subject.classList.add('badInput');
                resultValidation =  false;
            }
            else {
                this.refs.subject.classList.remove('badInput');
                this.refs.subject.classList.add('goodInput');
            }
        }
        if(name==null || name=='body') {

            if (this.state.body == ""){
                this.refs.body.classList.remove('goodInput');
                this.refs.body.classList.add('badInput');
                resultValidation = false;
            }
            else {
                this.refs.body.classList.remove('badInput');
                this.refs.body.classList.add('goodInput');
            }
        }
        return resultValidation;
    }


    render(){
        return(
            <div className="demo-1" onLoad = {this.DrawMap.bind(this)}>
                <div id="ip-container" className="ip-container">
                    <Menu/>
                    <div className="contact_page_container for_fade " id="main_container">
                        <div className="mycontact_form_container" id="mycontact_form_container">
                            <p className="label_contact">Contact me</p>
                            <p className="label_contact_hint">If you have any question, use form below ...</p>
                            <form onSubmit={this._onSubmit.bind(this)} ref='contactForm'>
                                <div className="name_email_container">
                                    <input placeholder="Name" type="text" name="username" ref="username" value={this.state.username} onInput={this._onKeyUp.bind(this)}/>
                                    <input placeholder="Email" type="text" name="email" ref="email" value={this.state.email} onInput={this._onKeyUp.bind(this)}/>
                                </div>
                                <div className="sunject_container">
                                    <input placeholder="Subject" type="text" name="subject" ref="subject" value={this.state.subject} onInput={this._onKeyUp.bind(this)}/>
                                </div>
                                <div className="body_container">
                                    <textarea placeholder="Message" name="body" defaultValue={""} ref="body" value={this.state.body} onInput={this._onKeyUp.bind(this)}/>
                                </div>
                                <div className="submit_container">
                                    <input type="submit" defaultValue="Send" />
                                </div>
                            </form>
                        </div>
                        <div className="mymap_container" id="mapid" />
                    </div>
                </div>{/* /container */}
                <Alert stack={{limit: 3}} />
            </div>
        )
    }

}
export default ContactMe;
