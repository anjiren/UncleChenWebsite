import React from 'react'
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Styles
import '../public/css/normalize.css';
import '../public/css/skeleton.css';
import '../public/css/uc.css';

// Components
import MainNav from './MainNav.jsx';
import ProductsGrid from './ProductsGrid.jsx';

const Home = () => (
  <div className="uc-chrome">
    <MainNav />
    <div className="uc-workspace">
      <div className="row">
        <div className="twelve columns">
          <img className="uc-landing__banner" type="image/png" src="images/peppers_cropped.png"/>
        </div>
      </div>
      <div className="row">
        <h1 className="twelve column uc-landing__header" id="about">
          Delightful Food for a Healthy Life
        </h1>
      </div>
      <div className="uc-workspace-grid--blocky">
        <div className="uc-workspace-grid-box-nonclick uc-workspace-grid-box-nonclick--red"><h5>Serving Chinese Customers, Penetrating US Markets</h5></div>
        <div className="uc-workspace-grid-box-nonclick uc-workspace-grid-box-nonclick--black">
          <strong>Union (Lian How) Food</strong> is a family-owned business with a continuous operation for more than half a century. In 1965, Mr. Y. B. Huang, founder of the company, started producing and marketing the proprietarily fermented bean and chili pastes/sauces in Taiwan. By the 1970s, the company had expanded with processing and sales facilities in China, Thailand, South and Central America, and the US Union International Food (UIF) was established in California in 1985. Under the <strong>Uncle Chen®</strong> brand, the subsidiary extended its business to include edible oils, sauces, seasonings/spices, teas and dried Asian foods.
  UIF has always aimed to produce and maintain the uncompromising high quality on its tasty, healthful, and convenient food products with continuous innovations. By implementing HACCP operational protocol and obtaining USFDA certification, UIF can proudly affirm the product safety for our worldwide customers.
        </div>
        <div className="uc-workspace-grid-box-nonclick uc-workspace-grid-box-nonclick--red"><h5>A Committment to Good Health</h5></div>
        <div className="uc-workspace-grid-box-nonclick uc-workspace-grid-box-nonclick--black">
          It has been Mr. Y. B. Huang’s firm commitment ever since the founding of Union Food, to conduct the business with social responsibility. Taking advantage of traditional Chinese fermentation processing while adopting the advanced technologies, the company endeavors to produce the delightfully tasty, proven healthful, and welcomingly convenient products for the market, both in China and abroad. Throughout his life he emphasizes personal integrity, product quality, and charity. Therefore, he never sacrifices these standards for personal gains, always sells high quality products at modest prices, and continually makes contributions to the communities.
  Mr. Daniel Chen, general manager of the company, was named one of the “One Hundred Outstanding Youths” in 2005 by the Chinese Ministry of State. With his education and training in traditional Chinese medicine, he applies the “food for health” principle in formulating and manufacturing products marketed by UIF. Safety of products, innovation in R&D, and excellence in customer services are his priority and goals in conducting the business.
  Consequently, UIF’s corporate mission statement is: Producing and maintaining the uncompromising high quality of tasty, healthful, and convenient food products with continuous innovations, and the ever-improving customer services.
        </div>
        <div className="uc-workspace-grid-box-nonclick uc-workspace-grid-box-nonclick--red"><h5>American Standards for a Chinese Market</h5></div>
        <div className="uc-workspace-grid-box-nonclick uc-workspace-grid-box-nonclick--black">
          Horrendous incidents of food poisoning and contamination, such as, recycled waste oil used for human consumption, adulterated baby formula causing infant malnutrition and developmental damages, and health hazardous rice and bogus drugs on the market, were reported in recent years in China. People begin to be deeply concerned about food safety. Mr. Y.B. Huang and Daniel Chen felt the pain for the consumers there, and pondered, “Can’t we market our products sold in the United States for the past 30 years also on the shelves in China to lead the reform of its food industry?” “American standards for Chinese market!” has, thus, quickly become an idea enthusiastically received by our clients and supported by UIF associates. Consequently, entering Chinese market is now not only the hope, but determination and an aim for immediate actions of the corporation!
        </div>
      </div>
    </div>
  </div>
)

const Products = () => (
  <div className='uc-chrome'>
    <MainNav />
    <div className='uc-workspace'>
      <h2>Products</h2>
      <ProductsGrid />
    </div>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Recipes = ({ match }) => (
  <div>
    <h2>Recipes</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

const Main = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/recipes" component={Recipes}/>
    </div>
  </Router>
);

render(<Main/>, document.getElementById('app'));
