import React, { Component } from 'react';
import Glide from '@glidejs/glide';
import '../css/glide.core.min.css'; 

import ClienteSmart1 from "../images/clientes/logo-banco-mercantil.png";
import ClienteSmart2 from "../images/clientes/logo-baxter.png";
import ClienteSmart3 from "../images/clientes/logo-gran-terminal.png";
import ClienteSmart4 from "../images/clientes/logo-mercantil-seguros.png";
import ClienteSmart5 from "../images/clientes/logo-thehills.png";
import ClienteSmart6 from "../images/clientes/machetazo.png";



const gliderConfig = {
  type: 'carousel',
  hoverpause: true,
   autoplay: 1200,
  perView: 3,
  breakpoints: {
    1024: {
      perView: 4
    },
    800: {
      perView: 3
    },
    640: {
      perView: 2
    }
  }
};
 


class ClientesSlider extends Component {

  
  componentDidMount () {
    new Glide('.glide3', gliderConfig).mount();
  }

  render() {
    return(
     <div class="container">
       
        <div class="glide3">

        

  
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">

                <li class="glide__slide">
                
                                
                <img className="md:w-5/12 w-3/4 mx-auto" src={ClienteSmart1} /> 

                </li>

                <li class="glide__slide">
                <img className="md:w-5/12 w-3/4 mx-auto mt-5" src={ClienteSmart2} /> 
                </li>

                <li class="glide__slide">
                <img className="md:w-5/12 w-3/4 mx-auto" src={ClienteSmart3} /> 
                </li>
                <li class="glide__slide">
                <img className="md:w-5/12 w-3/4 mx-auto" src={ClienteSmart4} /> 
                </li>
                <li class="glide__slide">
                <img className="md:w-5/12 w-3/4 mx-auto" src={ClienteSmart5} /> 
                </li>
                <li class="glide__slide">
                <img className="md:w-5/12 w-3/4 mx-auto mt-4" src={ClienteSmart6} /> 
                </li>


               

              </ul>
            </div>
            
            

           

          </div> 

     </div>
    
  );
  }
}

export default ClientesSlider;

