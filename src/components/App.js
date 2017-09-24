import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Base Component
import Layout from './Layout';

// Page Components
import MainPage from './MainPage';
import ProductsPage from './ProductsPage';
import RecipesPage from './RecipesPage';
import RecipeDetailPage from './RecipeDetailPage';
import NewsAndEventsPage from './NewsAndEventsPage';
import NotFoundPage from './NotFoundPage';

// Page Render Directives
import { renderRecipeDetail } from './RecipeDetailPage';

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/recipes" component={RecipesPage} />
      <Route exact path="/recipes/:id" component={RecipeDetailPage} />
      <Route exact path="/news-and-events" component={NewsAndEventsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
