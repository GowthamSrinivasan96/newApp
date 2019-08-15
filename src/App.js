import React from 'react';
import './Navigation.css';
import food3 from './Screenshot 2019-08-15 at 5.16.44 PM.png';
import food4 from './blur-close-up-dairy-product-376464.jpg';
import food5 from './eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg';
import food6 from './close-up-dinner-fish-46239.jpg';
import food7 from './basil-blur-cheese-1279330.jpg'

import 'font-awesome/css/font-awesome.min.css';
import Carousel from 'react-bootstrap/Carousel'

const images = [
food3,food4,food5,food6,food7
];
 function App() {
  return (
<>
<div className="header">
</div>
<div className="container_2" style={{ marginBottom:"2rem", marginTop: 3.8+'%',marginLeft:'12.6'+'%'}}>
          <div className="recipes__box" >
          <Carousel>
            {images.map(image => {
              return(
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
              </Carousel>  
              <div className="recipe__text">
                <h5 className="recipes__title">
              
                </h5>
                <p className="recipes__subtitle"><span className="displayName">
                Proper nutrition is one of the most essential elements to being healthy and living a long life. People deal with food every day, and food has been a part of life since the beginning of civilization. What we eat becomes our diet, and our diet plays a major role in deciding how healthy we are and how well our body functions.
                Browse here to find various nutritious and tasty food to try out at home.Upload any recipe(s) with amazing pictures of your food.
                </span></p>
              </div>
          </div>
        </div>
 </>
  );
}

export default App;


