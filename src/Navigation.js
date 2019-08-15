import React from 'react';
import './Navigation.css';
import './bootstrap.min.css';
import {Link} from 'react-router-dom';
 function Navigation() {
  return (
<div>
<nav class="sidenav" style={{lineHeight:2.5,backgroundColor:'#556672'}}>
  <ul  style={{paddingLeft:18+ 'px',paddingTop:32+"px"}}>
    <li>
     <Link style={{textDecoration:'none'}} to={{pathname: `/`}} >Home</Link>
     <Link style={{textDecoration:'none'}} to={{pathname: `recipeList`}}>View Recipes</Link>
     <Link style={{textDecoration:'none'}} to={{pathname: `recipe`}}>Add New Recipe</Link>
    </li>
  </ul>
</nav>
</div>
  );
}

export default Navigation;