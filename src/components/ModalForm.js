import React, { Component } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import FooterForm from "./FooterForm"

class ModalForm extends Component {

  
  componentDidMount () {
    
    const closebutton = document.getElementById('closebutton')
    const modal = document.getElementById('modal')
    const button = document.getElementById('buttonmodal')

    closebutton.addEventListener('click',function(){
      modal.classList.add('scale-0');
      modal.classList.remove('scale-100');
     

    })
    
    button.addEventListener('click',function(){
      modal.classList.remove('scale-0');
      modal.classList.add('scale-100');
     
    })
      
      
  }

   

  render(){
    return (
      <div id="modal" className="flex z-50 fixed top-0 left-0 w-screen h-screen items-center justify-center gradient bg-opacity-50 transform scale-0 transition-transform duration-300">

  {/*  Modal content  */}
  <button id="closebutton" type="button" class="absolute top-3/4 mt-2 focus:outline-none">
          
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
              stroke="white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
      </button>
  <FooterForm/>
  
  
  
  
      </div>
    );

  }
 
}

export default ModalForm;