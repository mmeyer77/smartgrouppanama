import React, { Component } from 'react';
import Glide from '@glidejs/glide';
import '../css/glide.core.min.css'; 
import Smart5 from "../images/carousel/camaras_seguridad.png";
import Smart1 from "../images/carousel/control_acceso_facial.png";
import Smart2 from "../images/carousel/control_acceso_vidrio.png";
import Smart3 from "../images/carousel/control_acceso.png";
import Smart4 from "../images/carousel/video_portero.png";


const gliderConfig = {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  breakpoints: {
    1024: {
      perView: 3
    },
    800: {
      perView: 2
    },
    640: {
      perView: 1
    }
  }
};
 


class PromotionSlider extends Component {

  
  componentDidMount () {
    new Glide('.glide2', gliderConfig).mount();
  }

  render() {
    return(
     <div class="container">
       
        <div class="glide2" data-glide-el="controls">
        <button class="z-10 absolute top-1/2 right-0" data-glide-dir=">">next</button>
        <div class="flechas__glide" data-glide-el="controls">
    <button class="z-10 absolute top-1/2" data-glide-dir="<">prev</button>
   
  </div>

  
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">

              <li class="glide__slide">
               
               <img className="w-4/5 md:w-full bg-white shadow-lg mx-auto" src={Smart1} />       
             

               </li>

                <li class="glide__slide">
               
                <img className="w-4/5 md:w-full bg-white shadow-lg mx-auto" src={Smart2} />       
              

                </li>

                <li class="glide__slide">
                <img className="w-4/5 md:w-full bg-white shadow-lg mx-auto" src={Smart3} /> 
                </li>


                <li class="glide__slide">
                <img className="w-4/5 md:w-full bg-white shadow-lg mx-auto" src={Smart4} /> 
                </li>
                <li class="glide__slide">
               
                <img className="w-4/5 md:w-full bg-white shadow-lg mx-auto" src={Smart5} />       
              

                </li>

              </ul>
            </div>
            
            

           

          </div> 

     </div>
    
  );
  }
}

export default PromotionSlider;

