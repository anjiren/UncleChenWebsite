import React from 'react';
import { Link } from 'react-router-dom';

export default class MainNav extends React.Component {
  render() {
    return (
      <nav className="uc-main-nav">
        <img className="uc-main-nav__logo" type="image/png" src="images/uc_logo_sm.png"/>
        <ul className="uc-main-nav__items">
          <li><h6><Link to="/products">Products</Link></h6></li>
          <li><h6><Link to="/recipes">Recipes</Link></h6></li>
          <li><h6><Link to="/">About</Link></h6></li>
          <li><h6><Link to="/news-and-events">News & Events</Link></h6></li>
        </ul>
        <img className="uc-main-nav__secondary-logo" type="image/png" src="images/lh_logo_sm.png"/>
      </nav>
    )
  }
}
