import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input', // Just user html tag name
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input', // Just user html tag name
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input', // Just user html tag name
                elementConfig: {
                    type: 'text',
                    placeholder: 'Pincode'
                },
                value: ''
            },
            country: {
                elementType: 'input', // Just user html tag name
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input', // Just user html tag name
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select', // Just user html tag name
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'normal', displayValue: 'Normal' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        let order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Gurudev',
                address: {
                    street: 'Huston',
                    zipCode: '53223',
                    country: 'India'
                },
                email: 'hero@villain.com'
            },
            deliveryMethod: 'fastest'
        }
        console.log("Contact Data:", order)
        // send data to backend here.
        // Firebase needs .json as end points to name it as node.
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                console.log(res)
                this.props.history.push('/');
            }).catch(err => {
                this.setState({ loading: false });
                console.log(err)
            });
    }

    render() {
        let form = (
            <form>
                <Input elementType="..." elementConfig="..." value="..." />
                <Input inputtype="input" type="text" name="email" placeholder="Your Email Id" />
                <Input inputtype="input" type="text" name="street" placeholder="Street Name" />
                <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnTypes="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;