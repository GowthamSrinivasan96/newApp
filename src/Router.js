import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from  './App.js';
import Recipe from './Recipe';
import Description from './Description.js';
import Navigation from './Navigation.js';
import RecipeList from './RecipeList.js';
import RecipeView from './RecipeView.js';
import Videos from './Videos.js';
const Router = () => (
<BrowserRouter>
<div>
  <Navigation />
  <Switch>
   <Route path="/" component={App} exact/>
   <Route path="/recipe" component={Recipe} />
   <Route path="/rview" component={RecipeView} />
   <Route path="/recipelist" component={RecipeList} exact/>
   <Route path="/descSteps" component={Description} />
  </Switch>
</div>

</BrowserRouter>

); 

export default Router;