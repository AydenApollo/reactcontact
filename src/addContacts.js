import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add_contact} from './actions.js';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {item: {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }}
    }
    handleSubmit(event) {
        event.preventDefault();
        //this.setState({name: this.state.name, email: this.state.email, phone: this.state.phone, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip});
        this.props.add_contact({name: this.state.name, email: this.state.email, phone: this.state.phone, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip})
        //console.log(this.item);
        console.log(this.state);
        //console.log(this.props);
        alert('Contact Added')
    }
    updateContact(event) {
        this.setState({[event.target.name]: event.target.value})
        console.log(event.target);
        console.log(event.target.name);
        console.log(event.target.value);

    }
    return_to_home(event) {
        this.props.history.push('/')
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e) }>
                <Card>
                <CardContent> 
                    <TextField label="Contact Name" value={this.state.name} name='name' onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact Email" value={this.state.email} name='email' onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact Phone Number" value={this.state.phone} name='phone' onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact Address" value={this.state.address} name='address' onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact City" value={this.state.city} name='city' onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact State" value={this.state.state} name='state' onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact Zip Code" value={this.state.zip} name='zip' onChange={(e) => this.updateContact(e)}/>
                </CardContent>
                <CardActions>
                    <Button type="submit">Complete Contact</Button>
                    <Button type="button" onClick={(e) => this.return_to_home(e)}>Return To Contact List</Button>
                </CardActions>
                </Card> 
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        add_contact: function (data) {
            dispatch(add_contact(data))
        }
    }
}

var ConnectedAddContact = connect(mapStateToProps, mapDispatchToProps)(AddContact)
export default ConnectedAddContact;