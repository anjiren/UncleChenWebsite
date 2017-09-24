import React from 'react';
import { render } from 'react-dom';

export class RecipesGrid extends React.Component {
  render() {
    return (
      <div>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    );
  }
}

export class Recipe extends React.Component {
  render() {
    return (
      <div>
        <RecipeImage />
        <RecipeTitle />
      </div>
    )
  }
}


export class RecipeImage extends React.Component {
  render() {
    return (
      <div>RECIPE IMAGE</div>
    )
  }

}

export class RecipeTitle extends React.Component {
  render() {
    return (
      <div>RECIPE TITLE</div>
    )
  }

}

export default RecipesGrid;
