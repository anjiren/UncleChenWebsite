import React from 'react';

// Components
import MainNav from './MainNav.jsx';
import RecipesGrid from './RecipesGrid.jsx';

export default class Products extends React.Component {
  render() {
    return (
      <div>
        <MainNav/ >
        <div className="uc-workspace">
          <RecipesGrid />
        </div>
      </div>
    )
  }
}
