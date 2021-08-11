import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contacts extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.initial_contacts.map((item, index) => {
                        return <li key={index}>
                            Name: {item.name}<br/>
                            City: {item.city}<br/>
                            State: {item.state}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initial_contacts: state.initial_contacts
    }
}

var ConnectedContactList = connect(mapStateToProps)(Contacts)
export default ConnectedContactList;