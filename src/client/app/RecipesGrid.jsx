import React from 'react';
import {render} from 'react-dom';

class RecipesGrid extends React.Component {

  render() {
    return (
      <div>
        Recipes
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />

      </div>
    );
  }
}

class Recipe extends React.Component {
  render() {
    return (
      <div>
        <RecipeImage />
        <RecipeDescription />
      </div>
    )
  }
}


class RecipeImage extends React.Component {
  render() {
    return (
      <div>Recipe IMAGE</div>
    )
  }

}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>Recipe DESCRIPTION</div>
    )
  }

}

export default RecipesGrid;
