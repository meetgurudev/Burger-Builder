import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 30,
    cheese: 25,
    meat: 90,
    bacon: 75
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state={...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 100,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {

        // Get the array of string entries
        const sum = Object.keys(ingredients)
            // then loop thru and replace with numbers.
            .map(igKey => {
                return ingredients[igKey]
            })
            // Then add them up where starting value is zero.
            .reduce((tot, el) => {
                return tot + el;
            }, 0);

        // Then set state of purchasable based on sum
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldState = this.state.ingredients[type];
        const updatedCount = oldState + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        console.log(priceAddition, newPrice)

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {

        const oldState = this.state.ingredients[type];
        if (oldState <= 0) {
            return;
        }

        const updatedCount = oldState - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceAddition;
        console.log(priceAddition, newPrice)

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancellHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('You Continue!');
    }

    render() {

        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        // Example {salad: true, meat: false, cheese: false, bacon: true}

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancellHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancellHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    purchaseHandler={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;