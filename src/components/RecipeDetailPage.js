import React from 'react';
import { render } from 'react-dom';

// Page Components
import NotFoundPage from './NotFoundPage';

// Data
import recipes from '../data/recipes';

/**
 * @param {RecipeDetailModel} props.recipe
 *
 * @typedef {Object} RecipeDetailModel
 * @param {string} imageUrl
 * @param {Array.<string>} ingredients
 * @param {Array.<string>} directions
 */

 // RecipeDetail Page Component
export class RecipeDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Model Properties
    const id = this.props.match.params.id;
    const recipe = recipes[id];

    if (!recipe) {
      return <NotFoundPage />
    }

    const ingredients = recipe.ingredients;
    const directions = recipe.directions;

    // View Properties
    const recipeName = recipe.name;
    const ingredientComponents = [];
    const directionComponents = [];

    let ingredientComponentKey = 0;
    ingredients.forEach(ingredient => {
      ingredientComponents.push(<li key={ingredientComponentKey}>{ingredient}</li>);
      ingredientComponentKey++;
    });

    let directionComponentKey = 0;
    directions.forEach(direction => {
      directionComponents.push(<li key={directionComponentKey}>{direction}</li>);
      directionComponentKey++;
    });
    return (
      <div className="uc-recipe-detail-wrapper">
        <div className="uc-recipe-detail">
          <img className="uc-recipe-detail-img" type="image/jpg" src="/img/chinese_fried_chicken.jpg"></img>
          <h2>{recipeName}</h2>
          <h5>Ingredients</h5>
          <ul>
            {ingredientComponents}
          </ul>
          <h5>Directions</h5>
          <ol>
            {directionComponents}
          </ol>
        </div>
      </div>
    );
  }
}

export default RecipeDetailPage;
