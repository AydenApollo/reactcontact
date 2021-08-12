import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';


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
                            <button type="button" onClick={(e) => this.deleteContact(e, index)}>Delete</button>
                        </li>
                    })}
                </ul>
                <div>
                    <Button component={Link} to='/add'>Add Contact</Button>
                </div>
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