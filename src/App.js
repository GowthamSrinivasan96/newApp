import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';
import food from './foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg';
import food2 from './foodiesfeed.com_pouring-water-in-a-glass-with-mint-and-lime.jpg';
import 'font-awesome/css/font-awesome.min.css';
import Carousel from 'react-bootstrap/Carousel'
 function App() {
  return (
    <>
    <div className="header">
    </div>
<div class="container_1" style={{marginTop:3.7 + "%"}}>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<p>
  nddkwnvkndkcnscsncjksjndcnsjkdncjknsdjcndsjcnjdsncnsjncsjkcbjcjsbcjbscmbscbjsbcsbcsjbjsbc
</p>
</div>
</>
  );
}

export default App;


