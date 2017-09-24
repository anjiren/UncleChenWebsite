import React from 'react';

// Components
import RecipesGrid from './RecipesGrid';

export class RecipesPage extends React.Component {
  render() {
    return (
      <div className="uc-workspace-grid--black">
        <div className="uc-workspace-grid-box uc-workspace-grid-box--white">Chinese Fried Chicken</div>
        <div className="uc-workspace-grid-box uc-workspace-grid-box--white">Stir Fried String Beans</div>
        <div className="uc-workspace-grid-box uc-workspace-grid-box--white">Ma Po Tofu</div>
        <div className="uc-workspace-grid-box uc-workspace-grid-box--white">Chef Chu’s Classic Dry Braised Prawns - A Signature Dish!</div>
        <div className="uc-workspace-grid-box uc-workspace-grid-box--white">Zha Jiang Noodles</div>
        <div className="uc-workspace-grid-box uc-workspace-grid-box--white">Classic Twice-Cooked Pork</div>
      </div>
    )
  }
}

export default RecipesPage;
