import React, { Component } from 'react';
import { connect } from 'react-redux';
import {delete_contact} from './actions.js'

class DeleteContact extends Component {
    constructor (props) {
        super(props);
    }
    deleteContact(event, index) {
        event.preventDefault();
        this.props.deleteContact(index)
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        delete_contact: function (data) {
            dispatch(delete_contact(data))
        }
    }
}


var ConnectedDeleteContact = connect(mapStateToProps, mapDispatchToProps)(DeleteContact)
export default ConnectedDeleteContact;