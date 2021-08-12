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
        this.state = {item: ''}
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.add_contact({name: this.state.item})
        this.setState({item: ''})
        alert('Contact Added')
    }
    updateContact(event) {
        this.setState({item: event.target.value})
    }
    return_to_home(event) {
        this.props.history.push('/')
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e) }>
                <Card>
                <CardContent> 
                    <TextField label="Contact Name" value={this.state.item} onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact Email" value={this.state.item} onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact Phone Number" value={this.state.item} onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact Address" value={this.state.item} onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact City" value={this.state.item} onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact State" value={this.state.item} onChange={(e) => this.updateContact(e)}/>
                    <TextField label="Contact Zip Code" value={this.state.item} onChange={(e) => this.updateContact(e)}/>
                </CardContent>
                <CardActions>
                    <Button type="submit" >Complete Contact</Button>
                    <Button type="button" onClick={(e) => this.return_to_home(e)}>Return Home</Button>
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