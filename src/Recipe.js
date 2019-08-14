import React,{useState} from 'react';
import './bootstrap.min.css';
import {Link} from 'react-router-dom';

const Recipe = () => {
  // const [chefDetail,setChefDetail]=useState({username:'',password:'',dishName:'',hour:'',mins:'',difficulty:''});
const [chefDetail,setChefDetail]=useState({difficulty:"easy"});
  const handleChange = (event) => {
    // console.log("eventtarget",event.target);
    chefDetail.username = event.target.name === 'username'?event.target.value:chefDetail.username;
    chefDetail.password = event.target.name === 'password'?event.target.value:chefDetail.password;
    chefDetail.hour = event.target.name === 'hour'?event.target.value:chefDetail.hour;
    chefDetail.description = event.target.name === 'description'?event.target.value:chefDetail.description;
    chefDetail.dishname = event.target.name === 'dishname'?event.target.value:chefDetail.dishname;
    chefDetail.difficulty = event.target.name === 'difficulty'?event.target.value:chefDetail.difficulty;
    if(event.target.name === 'difficulty')
          setChefDetail({difficulty:chefDetail.difficulty});
  };

return(  
<div id="form" key="newone" > 
<div className="header" >
</div>
{/* return ([ */}
<form className="form-horizontal" style={{marginLeft:14 +'%',marginTop: 4 + '%',marginRight: 2 +'%'}}>
    <div>
    <div className="form-group col-md-12">
      <label className="control-label col-md-2">Username</label> 
      <div className="col-md-6">
         <input type="text" className="form-control" name="username" value={chefDetail.username} onChange={handleChange} placeholder="Enter Username" required/>
      </div>
    </div>
    <div className="form-group col-md-12">
      <label className="control-label col-md-2" required>Password</label>
      <div className="col-md-6">
      <input type="password" className="form-control" name="password" value={chefDetail.password} onChange={handleChange} placeholder="Enter Password" required/>
      </div>
    </div>
    <div className="form-group col-md-12">
      <label className="control-label col-md-2">Dish Name</label>
      <div className="col-md-6">
      <input type="text" className="form-control" name="dishname" value={chefDetail.dishname} onChange={handleChange} placeholder="Enter Recipe Name" required/>
      </div>
    </div>
    <div className="form-group col-md-12">
      <label className="control-label col-md-2">Description</label>
      <div className="form-group" style={{marginLeft:18+'%'}}>
          <textarea rows="5" cols="65" name="description" value={chefDetail.description} onChange={handleChange} placeholder="Recipe description">
          </textarea>
      </div>
    </div>
    <div className="form-group col-md-12">
      <label className="control-label col-md-2">Preparation Time</label>
      <div style={{marginLeft:18+'%'}}>
      <input type="text" className="form-control col-md-1" name="hour" value={chefDetail.hour} onChange={handleChange} placeholder="mins"/>
      </div>
    </div>
    <div className="form-group col-md-12">
      <label className="control-label col-md-2">Difficulty level</label>
      <div className="col-md-2">
      <select className="browser-default custom-select" name="difficulty" value={chefDetail.difficulty} onChange={handleChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="difficult">Difficult</option>
       </select>   
      </div>
    </div>
    <div>
    <Link to={{pathname: `descSteps`, state:{chefDetails:chefDetail}}}>
        <button type="button" className="btn btn-primary float-right"  >
            Next
        </button>
        </Link>
    </div>
    </div>
</form>
{/* ])       */}
</div> 

)
};

export default Recipe;