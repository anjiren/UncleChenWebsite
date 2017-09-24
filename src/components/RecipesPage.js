import React from 'react';
import { Link } from 'react-router-dom';

// Components
import RecipesGrid from './RecipesGrid';

// Data
import recipes from '../data/recipes';

export class RecipesPage extends React.Component {
  render() {
    const recipeComponents = [];
    Object.entries(recipes).forEach(([id, recipeData]) => {
      recipeComponents.push(
        <div
          className="uc-workspace-grid-box uc-workspace-grid-box--white"
          key={id}>
          <Link
            className="uc-recipe-preview__link"
            to={`/recipes/${id}`}>
            {recipeData.name}
          </Link>
        </div>
      );
    });
    return (
      <div className="uc-workspace-grid--black">
        {recipeComponents}
      </div>
    )
  }
}

export default RecipesPage;
