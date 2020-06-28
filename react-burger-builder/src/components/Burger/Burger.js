import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // Get the keys as array...
    let transformedIngredients = Object.keys(props.ingredients)
        // Then get the value using maps
        .map(igKey => {
            // Make a new array with length of quantity.
            // Then use maps
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // key is req, adajcent jsx elements...
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }) // to trandform the array by flattening.
        .reduce((prevElem, currentElem) => {
            return prevElem.concat(currentElem)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding Ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;