import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from  './App.js';
import Recipe from './Recipe';
import Description from './Description.js';
import Navigation from './Navigation.js';
import RecipeList from './RecipeList.js';
import RecipeView from './RecipeView.js';
import EditDescription from './EditDescription';
const Router = () => (
<BrowserRouter>
<div>
  <Navigation />
  <Switch>
   <Route path="/" component={App} exact/>
   <Route path="/recipe" component={Recipe} />
   <Route path="/rview" component={RecipeView} />
   <Route path="/recipelist" component={()=>{ return (<RecipeList recipes={JSON.parse(localStorage.getItem('recipeCollection'))} />);}} />
   <Route path="/descSteps" component={Description} />
   <Route path="/editDesc" component={EditDescription} />
  </Switch>
</div>

</BrowserRouter>

); 

export default Router;