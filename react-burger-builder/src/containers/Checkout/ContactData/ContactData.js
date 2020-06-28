import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="text" name="email" placeholder="Your Email Id" />
                    <input type="text" name="street" placeholder="Street Name" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                    <Button btnTypes="Success">ORDER</Button>
                    <Button btnTypes="Danger">CANCEL</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;