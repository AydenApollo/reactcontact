import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddContact extends Component {
    update_state(event) {
        this.props.updateContact(event.target.value)
    }
    render() {
        return (
            <div>
                <h2>Contacts</h2>
            </div>
        )
    }
}

export default Contacts;