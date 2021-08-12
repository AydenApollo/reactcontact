import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeleteContact extends Component {
    constructor (props) {
        super(props);
    }
}


var ConnectedDeleteContact = connect(mapStateToProps, mapDispatchToProps)(DeleteContact)
export default ConnectedDeleteContact;