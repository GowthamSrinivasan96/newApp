import React,{useState} from 'react';
import './Description.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';


const Description = (props) => {
  
    var [recipeStep,setRecipeStep]=useState([0,]);
    const [stepNo,setStepNo]=useState(1);
    const [imageUrl,setImageUrl] = useState([]);
    const [recipeList,setRecipeList] = useState([]);
    function addNotification() {
        return(
            toast.notify('Recipe added successfully!',{
                position: 'top-right', 
            duration: '5000' })
            
                )
      }

    const saveRecipe = () => {
        addNotification();
        recipeList.map((recipe,index) => {
            recipe.stepNo = index;
        });
        console.log(recipeList,"recipeList");
        var newObj={
            username:'',
            password:'',
            dishname:'',
            hour:'',
            mins:'',
            difficulty:'',
            id:''
        };
        newObj = {...props.location.state.chefDetails};
        var uniqId;
        if(uniqId = parseInt(localStorage.getItem("uniqId"))){
           localStorage.setItem("uniqId",uniqId+1);
           uniqId = uniqId+1;
        }
        else{ 
           localStorage.setItem("uniqId",1);
            uniqId = 1;
        }
        newObj.id = uniqId;
        newObj.steps = recipeList;
        if(JSON.parse(localStorage.getItem('recipeCollection'))){
            var prevList = JSON.parse(localStorage.getItem('recipeCollection'));
            var newlist = [];
            newlist.push(newObj);
            var newRecpList = prevList.concat(newObj);
            localStorage.setItem('recipeCollection',JSON.stringify(newRecpList));
         
        }
        else {
            var newLists = [];
            newLists.push(newObj);
            localStorage.setItem('recipeCollection',JSON.stringify(newLists));
        }
    };

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
                     imageUrl[item]= recpDetail.imgUrl? recpDetail.imgUrl : '';
                }
                reader.readAsDataURL(file);
            }
        }
        else if(recipeList[item]){
            recpDetail.imgUrl = recipeList[item].imgUrl;
        }
        recpDetail.ingredient = event.target.name === 'ingredient'?event.target.value:recipeList[item]?recipeList[item].ingredient:'';
        recpDetail.description = event.target.name === 'description'?event.target.value:recipeList[item]?recipeList[item].description:'';
        if(item===0)
           recpDetail.videoLink = event.target.name === 'videoLink'?event.target.value:recipeList[item]?recipeList[item].videoLink:'';
        recipeList[item] = recpDetail;
    }
    
    const recipeStepAdded = () => {
      setStepNo(stepNo+1);
      recipeStep.push(stepNo);
      setRecipeStep(recipeStep);
    };
    const recipeStepDelete = () => {
        setStepNo(stepNo-1);
        recipeStep.pop();
        setRecipeStep(recipeStep);
    };
    return(
<div>    
    <div className="header">
    <Link to={{pathname: `/`}}>
    <button className="btn" style={{float:'right',marginRight:10 +'px',marginTop:8+'px',backgroundColor: '#ffffff',border: 1 + 'px solid #d5dadf'}} onClick={saveRecipe}> save</button>
    </Link>
    </div>
    <div className="contentSpacing">
{recipeStep.map(function(item){
        return([
        <div key={item}>    
        <div className="device-controls" key={item}>
                 <span className="fa fa-2x fa-plus-circle pull-left" onClick={() => recipeStepAdded() }></span>
                 <span className="fa fa-2x fa-minus-circle pull-left"  onClick={() =>recipeStepDelete()}></span>
        </div>
         <div className = "device-container">
         <div className="col-md-12 row">
             <div className="col-md-3 col">
             <div class="card">
             <img class="card-img-top" style={{height:112+'px'}} id={item} name="image" src={imageUrl[item]} alt="" />
             <div class="card-body">
             <h5 style={{fontSize:1 +'rem'}}>Image Upload </h5>
             <p  style={{fontSize:1 +'rem'}}><input type="file" id="upload" name="image" style={{maxWidth:140+"px"}} onChange={(event)=>{handleChangeStepDesc(event,item)}}></input></p>
             </div>
             </div>
             </div>
             <div className="col-md-6" >
                     <form className="form-horizontal">
                         {item===0?(
                         <div className="form-group">
                             <textarea rows="5" cols="75" name="ingredient" onChange={(event)=>{handleChangeStepDesc(event,item)}} placeholder="List(s) of Ingredients">
                             </textarea>
                         </div>):''
                         }
                         <div className="form-group">
                             <textarea rows={item===0?4:12} cols="75" name="description"  onChange={(event)=>{handleChangeStepDesc(event,item)}} placeholder="Recipe Step">
                             </textarea>
                         </div>
                         {item===0?(
                         <div className="form-group">
                            <textarea rows="1" cols="75" name="videoLink"  onChange={(event)=>{handleChangeStepDesc(event,item)}} placeholder="video link">
                             </textarea>
                         </div>):''
                         }
                     </form>
             </div>
         </div>
         </div>
         </div>
        ])
    })}
    </div>
</div>
   
    );
};

export default Description;
