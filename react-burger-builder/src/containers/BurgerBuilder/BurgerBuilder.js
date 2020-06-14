import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Layout/Burger/Burger';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';

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
        totalPrice: 100
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
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo} />
            </Aux>
        );
    }
}

export default BurgerBuilder;