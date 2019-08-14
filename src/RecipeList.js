import React,{useState} from 'react';
import './bootstrap.min.css';
import {Link} from 'react-router-dom';
import App from './App';
import './App.css';
var recipesList = [];
if(JSON.parse(localStorage.getItem('recipeCollection'))) {
     recipesList = JSON.parse(localStorage.getItem('recipeCollection'));
    console.log("recipes",recipesList)
}
const RecipeList = (props) => {
    var [recipes,setRecipes] = useState((recipesList && recipesList.length? recipesList : []));
return(
<div>
<div className="header">
</div>    
<div className="" style={{marginLeft:12+'%'}}>
    <div className="row" style={{marginTop:67+'px',marginLeft:10+'px'}}>
    { recipes.map((recipe) => {
      return (
        <div key={recipe.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="recipes__box" >
            <img 
              className="recipe__box-img" style={{width:100+'%',height:160 +'px'}}
              src={recipe.steps[0].imgUrl} 
              alt={recipe.username}/>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  { recipe.dishname? (recipe.dishname.length < 20 ? `${recipe.dishname}` : `${recipe.dishname.substring(0, 25)}...`): '' }
                </h5>
                <p className="recipes__subtitle">Publisher: <span className="displayName">
                  { recipe.username }
                </span></p>
              </div>
              <button className="recipe_buttons">
                <Link to={{ 
                  pathname: `/rview`,
                  state: { recipe: recipe.dishname,id:recipe.id }
                }}>View Recipe</Link>
              </button>
          </div>
        </div>
      );
    })}
    </div>
  </div> 
  </div>
);
};

export default RecipeList;