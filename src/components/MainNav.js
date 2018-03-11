import React from 'react';
import { Link } from 'react-router-dom';

export class MainNav extends React.Component {
  render() {
    return (
      <nav className="uc-main-nav">
        <Link to="/"><img className="uc-main-nav__logo" type="image/png" src="/img/lh_logo_xsm.png"/></Link>
        <ul className="uc-main-nav__items">
          <li><h6><Link to="/products">Products</Link></h6></li>
          <li><h6><Link to="/recipes">Recipes</Link></h6></li>
          <li><h6><Link to="/">About</Link></h6></li>
          <li><h6><Link to="/news-and-events">News & Events</Link></h6></li>
        </ul>
      </nav>
    )
  }
}

export default MainNav;
