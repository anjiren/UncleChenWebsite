import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './IndexPage';
import ProductsGrid from './Products';
import { AthletePage } from './AthletePage';
import { NotFoundPage } from './NotFoundPage';
import athletes from '../data/athletes';

const renderIndex = () => <Home />;
const renderAthlete = ({ match, staticContext }) => {
  const id = match.params.id;
  const athlete = athletes.find(current => current.id === id);
  if (!athlete) {
    return <NotFoundPage staticContext={staticContext} />;
  }

  return <AthletePage athlete={athlete} athletes={athletes} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ProductsGrid} />
      //<Route exact path="/athlete/:id" render={renderAthlete} />
      //<Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
