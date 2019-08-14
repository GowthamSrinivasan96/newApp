import React,{useState} from 'react';
import './bootstrap.min.css';
import './Description.css';
// import './font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
import App from './App.js';
import {random} from 'mathjs';

const Description = (props) => {
    var [recipeStep,setRecipeStep]=useState([0,]);
    const [stepNo,setStepNo]=useState(1);
    const [imageUrl,setImageUrl] = useState([]);
    const [recipeList,setRecipeList] = useState([]);
    console.log("chefdetails",props.location.state.chefDetails)
    const fileSelected = event => {
        console.log(event.target.files[0]);
        
        var image = event.target.files[0].name;
        setImageUrl(image);
        console.log(document.getElementById('image-tag'));
    };
    const saveRecipe = () => {
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
        if(uniqId=parseInt(localStorage.getItem("uniqId"))){
           localStorage.setItem("uniqId",uniqId+1);
           uniqId = uniqId+1;
        }
        else{ 
           localStorage.setItem("uniqId",1);
            uniqId = 1;
        }
        newObj.id = uniqId;
        console.log("newobj",newObj)
        newObj.steps = recipeList;
        if(JSON.parse(localStorage.getItem('recipeCollection'))){

        console.log(JSON.parse(localStorage.getItem('recipeCollection')),JSON.parse(localStorage.getItem('recipeCollection')).length,"recipecollection");

            var prevList = JSON.parse(localStorage.getItem('recipeCollection'));
            console.log("prevList",prevList)
            console.log("newObjnew",newObj)
            var newlist = [];
            newlist.push(newObj);
            var newRecpList = prevList.concat(newObj);
            console.log(newRecpList,"newrecplist")
            localStorage.setItem('recipeCollection',JSON.stringify(newRecpList));
         
        }
        else {
            var newLists = [];
            newLists.push(newObj);
            localStorage.setItem('recipeCollection',JSON.stringify(newLists));
            console.log("localStorage",JSON.parse(localStorage.getItem('recipeCollection')));
        }
        // redirectToHome();
    };

    function getBase64(e) {
        var file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.setState({
            imgUpload: reader.result
          })
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
      }


    //   $("#upload").change(function(e) {
        function change(e,item){
console.log("event",e)
        for (var i = 0; i < e.target.files.length; i++) {
    
            var file = e.target.files[i];
    
            var img = document.getElementById(item);
            var reader = new FileReader();
            reader.onloadend = function() {
                 img.src = reader.result;
            console.log("result",reader.result)
                 return reader.result;
            }
            reader.readAsDataURL(file);
            // return reader.result;
            // $("input").after(img);
        }
    }
    // });

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
        // recpDetail.imgUrl = event.target.name === 'image'?change(event,item):recipeList[item]?recipeList[item].imgUrl:'';
        recpDetail.ingredient = event.target.name === 'ingredient'?event.target.value:recipeList[item]?recipeList[item].ingredient:'';
        recpDetail.description = event.target.name === 'description'?event.target.value:recipeList[item]?recipeList[item].description:'';
        recipeList[item] = recpDetail;
        console.log("imageurl",imageUrl[item]);
        console.log("ihcwhchwih",recipeList)
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
        console.log(recipeStep)
    };

    console.log(recipeStep,"verevjj")
    return(
<div>    
    <div className="header">
    <Link to={{pathname: `/`}}>
    <button className="btn" style={{float:'right',marginRight:10 +'px',marginTop:12+'px',backgroundColor: '#ffffff',border: 1 + 'px solid #d5dadf'}} onClick={saveRecipe}> save</button>
    </Link>
    </div>
    <div className="contentSpacing">
{recipeStep.map(function(item){
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
             <img class="card-img-top" style={{height:112+'px'}} id={item} name="image" src={imageUrl[item]} alt="Card image top" />
             <div class="card-body">
             <h5 style={{fontSize:1 +'rem'}}>Image Upload </h5>
             <p  style={{fontSize:1 +'rem'}}><input type="file" id="upload" name="image" style={{maxWidth:140+"px"}} onChange={(event)=>{handleChangeStepDesc(event,item)}}></input></p>
             </div>
             </div>
             </div>
             <div className="col-md-6" >
                     <form className="form-horizontal">
                         <div className="form-group">
                             <textarea rows="5" cols="75" name="ingredient" onChange={(event)=>{handleChangeStepDesc(event,item)}} placeholder="List(s) of Ingredients">
                             </textarea>
                         </div>
                         <div className="form-group">
                             <textarea rows="4" cols="75" name="description"  onChange={(event)=>{handleChangeStepDesc(event,item)}} placeholder="Recipe Step">
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

export default Description;
