import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igkey => {
            return (
                <li key={'igKey' + Math.random()}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingredients[igkey]}
                </li>
            );
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicios burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong> Total Price: ₹{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnTypes="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnTypes="Success" clicked={props.purchaseContinue} >CONTINUE</Button>
        </Aux>
    )

};

export default orderSummary;