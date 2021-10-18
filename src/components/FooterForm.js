import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function FooterForm() {
  const [state, handleSubmit] = useForm("mzbywkqy");
  if (state.succeeded) {
    handleReload();
      return <p className="w-full text-3xl text-white">¡Gracias por contactarnos!</p>;
  }

  function handleReload(){
    setTimeout(function(){window.location.reload();},1500)
  }

  return (
    <form class="flex flex-wrap flex-col justify-around rounded-lg px-4 w-full md:w-1/2 mx-auto" onSubmit={handleSubmit} >
      <p className="uppercase w-full text-3xl text-white">¡Escríbenos y te asesoramos!</p>
    <div class="flex items-center py-3 w-full">
      <input class=" bg-white appearance-none bg-transparent border-none w-full text-black py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nombre" id="name"
         
        name="nombre"/>

        
                      
    </div>

    <div class="flex items-center  py-3 w-full">
      <input class="bg-white appearance-none bg-transparent border-none w-full text-black py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Correo" id="email"
        
        name="email"/>
                
      
    </div>

    <div class="flex items-center py-3 w-full">
      <input class="bg-white appearance-none bg-transparent border-none w-full text-black py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Teléfono" id="telefono"
        
        name="telefono"/>
                
      
    </div>
    
    <div class="flex items-center py-3 w-full">
    <select name="producto" class="bg-white border-white form-select block w-full mt-1 py-1 px-2">
      <option value="" disabled selected hidden >Seleccionar producto</option>
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
    <div class="flex items-center py-3 w-full">
    <textarea name="mensaje" id="mensaje" class=" px-2 h-20 form-textarea mt-1 block w-full" rows="3" placeholder="Escriba su mensaje..."></textarea>
      
      
    </div>
    <button type="submit" class="uppercase mx-auto flex-shrink-0 bg-white hover:bg-teal-200 border-white  hover:border-teal-700 text-lg border-4 smart__fontcolor mt-4 rounded-full font-bold pt-1 px-4" >
        Enviar
      </button>
  </form>
  );
}

export default FooterForm;