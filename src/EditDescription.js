import React,{useState} from 'react';
import './Description.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

function useForceUpdate(){
    const [value, set] = useState(true); //boolean state
    return () => set(!value); // toggle the state to force render
}
const EditDescription = (props) => {
    console.log(props.location.state.editRecipe,"edit recipe");
    var [recipeSteps,setRecipeSteps] = useState(props.location.state.editRecipe.steps);
    const forceUpdate = useForceUpdate();
    console.log(recipeSteps,"recipedetail")
    var stepNo=props.location.state.editRecipe.steps.length-1;
    const handleChangeStepDesc = (event,item) => {
        var recpDetail={};
        if(event.target.name ==='image'){
            for (var i = 0; i < event.target.files.length; i++) {
                var file = event.target.files[i];
                var img = document.getElementById(item);
                var reader = new FileReader();
                reader.onloadend = function() {
                     img.src = reader.result;
                     recpDetail.imgUrl =reader.result;
                     recipeSteps[item].imgUrl = recpDetail.imgUrl?recpDetail.imgUrl:'';
                }
                reader.readAsDataURL(file);
            }
        }
        else if(recipeSteps[item]){
            recpDetail.imgUrl = recipeSteps[item].imgUrl;
        }
        recpDetail.ingredient = event.target.name === 'ingredient'?event.target.value:recipeSteps[item]?recipeSteps[item].ingredient:'';
        recpDetail.description = event.target.name === 'description'?event.target.value:recipeSteps[item]?recipeSteps[item].description:'';
        recipeSteps[item].description = recpDetail.description;
        recipeSteps[item].ingredient = recpDetail.ingredient;
        forceUpdate();
    }
    
    const recipeStepAdded = () => {
    stepNo+=1;
      recipeSteps.push({stepNo:stepNo});
      setRecipeSteps(recipeSteps);
    };
    const recipeStepDelete = () => {
        stepNo-=1;
        recipeSteps.pop();
        setRecipeSteps(recipeSteps);
    };

    function addNotification() {
        return(
            toast.notify('Recipe edited successfully!',{
                position: 'top-right', 
            duration: '5000' })
            
                )
      }

    const saveRecipe = () => {
      addNotification();
      var recipeList =  JSON.parse(localStorage.recipeCollection);
      var newRecpList = recipeList.filter(recipe => {
        return  recipe.id !== props.location.state.editRecipe.id;
      })
      delete props.location.state.editRecipe.steps;
      var newObj = {...props.location.state.editRecipe};
      newObj.steps = recipeSteps ; 
      newRecpList.push(newObj);
      localStorage.setItem('recipeCollection',JSON.stringify(newRecpList));

    }
    

    return(
<div>    
    <div className="header">
    <Link to={{pathname: `/`}}>
    <button className="btn" style={{float:'right',marginRight:10 +'px',marginTop:8+'px',backgroundColor: '#ffffff',border: 1 + 'px solid #d5dadf'}} onClick={saveRecipe}> save</button>
    </Link>
    </div>
    <div className="contentSpacing">
{recipeSteps.map(function(item){
        return([
        <div>    
        <div className="device-controls" key={item}>
                 <span className="fa fa-2x fa-plus-circle pull-left" onClick={() => recipeStepAdded() }></span>
                 <span className="fa fa-2x fa-minus-circle pull-left" onClick={() =>recipeStepDelete()}></span>
        </div>
         <div className = "device-container">
         <div className="col-md-12 row">
             <div className="col-md-3 col">
             <div class="card">
             <img class="card-img-top" style={{height:112+'px'}} id={item.stepNo} name="image" src={item.imgUrl} alt="Card image top" />
             <div class="card-body">
             <h5 style={{fontSize:1 +'rem'}}>Image Upload </h5>
             <p  style={{fontSize:1 +'rem'}}><input type="file" id="upload" name="image" style={{maxWidth:140+"px"}} onChange={(event)=>{handleChangeStepDesc(event,item.stepNo)}}></input></p>
             </div>
             </div>
             </div>
             <div className="col-md-6" >
                     <form className="form-horizontal">
                         <div className="form-group">
                             <textarea rows="5" cols="75" name="ingredient" value={item.ingredient} onChange={(event)=>{handleChangeStepDesc(event,item.stepNo)}} placeholder="List(s) of Ingredients">
                             </textarea>
                         </div>
                         <div className="form-group">
                             <textarea rows="4" cols="75" name="description" value={item.description} onChange={(event)=>{handleChangeStepDesc(event,item.stepNo)}} placeholder="Recipe Step">
                             </textarea>
                         </div>
                     </form>
             </div>
         </div>
         </div>
         </div>
        ])
    })};
    </div>
</div>
   
    );
};

export default EditDescription;
