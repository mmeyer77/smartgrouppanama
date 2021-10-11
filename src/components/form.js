import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mzbywkqy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form class="hidden md:flex flex-wrap flex-row justify-around bg-white rounded-lg px-4 py-8 w-full max-w-2xl" onSubmit={handleSubmit}>
    <div class="flex items-center border-b py-3 w-1/4">
      <input class="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="NOMBRE" id="name"
         
        name="name"/>
                      
    </div>

    <div class="flex items-center border-b  py-3 w-1/3">
      <input class="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="CORREO" id="email"
        
        name="email"/>
                
      
    </div>

    <div class="flex items-center border-b py-3 w-1/4">
      <input class="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="TELÉFONO" id="phone"
        
        name="phone"/>
                
      
    </div>
    
    <div class="flex items-center border-b py-2 w-4/6">
      <input class="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="PRODUCTO" id="producto"
         
        name="producto"/>
      
      
    </div>
    <button class="flex-shrink-0 gradient hover:bg-teal-700 border-teal-600  hover:border-teal-700 text-sm border-4 text-white  px-3 mt-4     rounded" type="button">
        COTIZAR
      </button>
  </form>
  );
}

export default ContactForm;