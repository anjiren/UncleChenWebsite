import React from 'react';
import {render} from 'react-dom';

/**
 * @typedef {Object} RecipeDetailModel
 * @param {string} imageUrl
 * @param {Array.<string>} ingredients
 * @param {Array.<string>} directions
 */
class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ingredients = ['water', 'egg'];
    const directions = ['Boil water', 'Put egg inside', 'Wait'];
    const ingredientComponents = [];
    ingredients.forEach(ingredient => {
      ingredientComponents.push(<li>{ingredient}</li>);
    });
    return (
      <div>
        <h5>Ingredients</h5>
        <ol>
          {ingredientComponents}
        </ol>
      </div>
    );
  }
}

export default RecipeDetail;
