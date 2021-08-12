import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add_contact} from './actions.js';

import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {Contact: ''}
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e) }>
                <Card>
                <CardContent> 
                    <TextField label="Contact Name"/>
                    <TextField label="Contact Email"/>
                    <TextField label="Contact Phone Number"/>
                    <TextField label="Contact Address"/>
                    <TextField label="Contact City"/>
                    <TextField label="Contact State"/>
                    <TextField label="Contact Zip Code"/>
                </CardContent>
                <CardActions>
                    <Button type="submit">Complete Contact</Button>
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