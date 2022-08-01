import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mzbywkqy");
  if (state.succeeded) {
      handleReload();
      return <p className="w-full text-3xl text-white">¡Gracias por contactarnos!</p>;
     
  }
  function handleReload(){
    setTimeout(function(){window.location.reload();},1500)
  }
  return (
    <form class="hidden md:flex flex-wrap flex-row justify-between bg-white rounded-lg px-4 py-2 w-full max-w-2xl mt-4" onSubmit={handleSubmit} data-aos="fade-up"
    data-aos-duration="2000">
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
    
   

    <div class="flex items-center py-2 w-4/6 border-b">
    <select name="producto" class="bg-white border-white form-select block w-full mt-1 py-1 px-2">
      <option value="" disabled selected hidden>Seleccionar producto</option>
      <option value="- PROMO - Kit Control de Acceso">- PROMO - Kit Control de Acceso</option>
      <option value="- PROMO - Kit Video Portero">- PROMO - Kit Video Portero</option>
      <option value="- PROMO - Kit Cámaras de Seguridad"> - PROMO - Kit Cámaras de Seguridad</option>
      <option value="- PROMO - Kit Control de Acceso Reconocimiento Facial">- PROMO - Kit Control de Acceso Reconocimiento Facial</option>
      <option value="- PROMO - Kit Control de Acceso para Puerta de Vidrio Templado">- PROMO - Kit Control de Acceso para Puerta de Vidrio Templado</option>
      <option value="CCTV (Cámaras de Seguridad)">CCTV (Cámaras de Seguridad)</option>
      <option value="Control de Acceso y Relojes de Asistencia">Control de Acceso y Relojes de Asistencia</option>
      <option value="Cableado Estructurado">Cableado Estructurado</option>
      <option value="Alarma de Incendios">Alarma de Incendios</option>
      <option value="Reparacion de Contadoras de Billetes">Reparacion de Contadoras de Billetes</option>
      <option value="Alarma de Robo">Alarma de Robo</option>
      <option value="Audio Ambiental">Audio Ambiental</option>
      <option value="Telefonía e Intercoms">Telefonía e Intercoms</option>
      <option value="Otro">Otro</option>
  </select>
      
      
    </div>
    <button class="flex-shrink-0 gradient hover:bg-teal-700 border-teal-700  hover:border-teal-700 text-sm border-4 text-white  px-3 mt-4 rounded-full" type="submit">
        COTIZAR
      </button>
  </form>
  );
}

export default ContactForm;