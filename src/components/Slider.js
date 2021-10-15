import React, { Component } from 'react';
import Glide from '@glidejs/glide';
import '../css/glide.core.min.css'; 
import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
import Smart1 from "../images/smart1.png";
import Smart2 from "../images/smart2.png";
import Smart3 from "../images/smart3.png";

const gliderConfig = {
  type: 'carousel',
  startAt: 1,
  perView: 3
};
 


class Slider extends Component {

  
  componentDidMount () {
    new Glide('.glide', gliderConfig).mount();
  }

  render() {
    return(
     <div class="container">
       
        <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">

                <li class="glide__slide"><img className="md:w-4/12 w-3/12 w-1/5 " src={Smart1} /></li>

                <li class="glide__slide">
                <img className="md:w-4/12 w-3/12 w-1/5 " src={Smart2} />     
                </li>
                <li class="glide__slide">
                <img className="md:w-4/12 w-3/12 w-1/5 " src={Smart3} /> 
                </li>
              </ul>
            </div>
            
            

            <div class="glide__bullets" data-glide-el="controls[nav]">
    <button class="glide__bullet" data-glide-dir="=0"></button>
    <button class="glide__bullet" data-glide-dir="=1"></button>
    <button class="glide__bullet" data-glide-dir="=2"></button>
  </div>

          </div> 

     </div>
    
  );
  }
}

export default Slider;

