import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
const RecipeList = (props) => {
    var [recipes,setRecipes] = useState((props.recipes && props.recipes.length? props.recipes : []));
return(
<div>
<div className="header">
</div>    
<div className="" style={{marginLeft:12+'%'}}>
    <div className="row" style={{marginTop:67+'px',marginLeft:10+'px'}}>
      {recipes.length===0? (<div className="col-md-2" style={{margin:'auto'}}>No Recipes Found<Link to={{pathname: `recipe`}}><button  className="btn btn-primary">Add Recipe</button></Link></div>):''}
    { recipes.map((recipe,idx) => {
      return (
        <div key={idx} className="col-md-4" style={{ marginBottom:"2rem" }}>
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
              <Link to={{ 
                  pathname: `/rview`,
                  state: { recipe: recipe.dishname,id:recipe.id }
                }}>
              <button className="recipe_buttons">
                View Recipe
              </button>
              </Link>
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