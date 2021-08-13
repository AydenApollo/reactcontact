import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteContact} from './actions.js'

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
        deleteContact: function (data) {
            dispatch(deleteContact(data))
        }
    }
}


var ConnectedDeleteContact = connect(mapStateToProps, mapDispatchToProps)(DeleteContact)
export default ConnectedDeleteContact;