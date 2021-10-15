import React from "react";
import { useState } from "react"
import Menu from "./Menu";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import waveTop1 from "../images/wave-top1.png";
import waveMid1 from "../images/wave-mid1.png";
import waveBot1 from "../images/wave-bot1.png";
import smartSVG from "../images/camaras-portada.png";
import heroImg from "../images/hero.png";
import smartLogo from "../images/LOGO.png";
import fotoTecnico from "../images/foto-tecnico.png";
import ContactForm from "./form";
import Slider from "./Slider";
import PromotionSlider from "./PromotionSlider";
import ClientesSlider from "./ClientesSlider";

function Layout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isBrowser = typeof window !== "undefined"

  //FUNCION PARA CERRAR EL MENU CUANDO HAGA CLICK AFUERA DEL MENU
  if (isBrowser) { //Verifica que este en el browser para utilizar 'window'
    window.addEventListener('mouseup', function(e){
      if(e.target.id !== 'mobile-menu'){
         document.getElementById("mobile-menu").classList.add("hidden");
      }
  });
  }
  

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              github,
              blog
            }
          }
        }
      `}
      render={data => (
        
         <body className="leading-normal tracking-normal text-black gradient">

            

            {/* Navigation */}
            <nav id="header" className="fixed w-full z-30 top-0 text-white bg-white shadow">
            
              <div className="w-full container mx-auto flex sm:flex-wrap items-center justify-between mt-0 py-2">
                    
                {children}
                <div className="md:pl-4 flex items-center z-50 max-w-sm">
                  <a className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"  href="#"> 
                  <img className="md:w-4/12  w-1/5 " src={smartLogo} />
                  </a>
                </div>
                
                <div className="block lg:hidden pr-4">
                
                  <button id="nav-toggle" 
                          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-50 bg-primary">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>
                
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                  <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    {/* <li className="mr-3">
                      <a className="inline-block py-2 px-4 text-black font-bold no-underline group-focus:text-yellow-300" href="#">INICIO</a>
                    </li> */}
                    <li className="mr-3">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#servicios">SERVICIOS</a>
                    </li>
                    <li className="mr-3">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">PAQUETES</a>
                    </li>
                    <li className="mr-3">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">QUIENES SOMOS</a>
                    </li>
                  </ul>
                  <form action={data.site.siteMetadata.github}>
                    <button type="submit" id="navAction" 
                            className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 bg-primary text-white">CONTACTANOS</button>
                  </form>
                  
                </div>
  <div className="lg:hidden flex items-center">
	<button id="mobileb" className="outline-none mobile-menu-button z-50" onClick={() => handleToggle()}>
    <svg 
        className="w-6 h-6 text-gray-500"
        x-show="!showMenu"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
</button>
      
  
</div>
              </div>
              {/* Mobile-menu */}
              <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
              <div id="mobile-menu" className={navbarOpen ? "h-4/6 mobile-menu z-50 absolute w-full  bg-white text-black transition -active " : "h-4/6 hidden mobile-menu z-50 absolute w-full  bg-white text-black transition"} >

              <ul className="z-50">
                  <li className="active"><a href="index.html" className="block text-lg px-5  py-4  hover:bg-green-500 font-semibold" onClick={() => closeMenu()}>INICIO</a></li>
                  <li><a href="#servicios" className="block text-lg px-5  py-4 hover:bg-green-500 transition duration-300" onClick={() => closeMenu()}>SERVICIOS</a></li>
                  <li><a href="#about" className="block text-lg px-5  py-4 hover:bg-green-500 transition duration-300" onClick={() => closeMenu()}>PAQUETES</a></li>
                  <li><a href="#contact" className="block text-lg px-5  py-4 hover:bg-green-500 transition duration-300" onClick={() => closeMenu()}>QUIENES SOMOS</a></li>
              </ul>
          </div>
            </nav>

            {/* Hero */}
            <div className="2xl:pt-8 gradient">

              <div className="container px-3 mx-auto flex flex-wrap flex-col-reverse md:flex-row items-center mt-32 md:mt-20">
              

                <div className="-my-44 flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left z-20">
                  
                  <h1 className="max-w-lg text-2xl lg:text-6xl md:text-5xl      font-bold leading-none text-white xs:mt-3">SEGURIDAD EN TU HOGAR & OFICINA</h1>
                  <p className="leading-none text-xl     md:mb-2 mt-2 mb-0 text-white">
                    {data.site.siteMetadata.title} tiene lo que necesitas para mantenerte<br/> protegido 24/7. Contáctanos y prueba nuestras soluciones profesionales de seguridad.
                    
                  </p>
                  {/* BOTON SOLICITA COTIZACION */}
                  <button type="submit" className="sm:hidden mx-auto lg:mx-0 hover:underline bg-white text-green-800     font-bold rounded-full xs:my-6 py-2 px-6 shadow-lg z-20">SOLICITA COTIZACIÓN</button>

<ContactForm/>
                  

                </div>
                
                <div className="w-2/5 sm:w-3/12 md:w-3/12 lg:ml-32 md:ml-24  mt-10     2xl:py-7 z-20">
                  <img className="w-full"  src={smartSVG} />
                </div>

            
              </div>
              <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                  <div className="wave waveTop" style={{backgroundImage: `url(${waveTop1})`}}> </div>
                </div>
                <div className="waveWrapperInner bgMiddle">
                  <div className="wave waveMiddle" style={{backgroundImage: `url(${waveMid1})`}}></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                  <div className="wave waveBottom" style={{backgroundImage: `url(${waveBot1})`}}></div>
                </div>
            </div>
            </div>

           

            {/* Seccion 2 */}
            <section id="servicios" className="border-b py-50 bg-white lg:mt-14 pt-24">
            <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
              <div className="container max-w-5xl mx-auto m-8 flex flex-col">
                <h2 className="w-full my-2 text-2xl md:text-4xl font-bold leading-tight text-center text-gray-800">TU SEGURIDAD ES PRIMERO<br/> OFRECEMOS CALIDAD A LOS MEJORES PRECIOS</h2>
                

                  <p className="text-gray-600 w-full md:w-1/2 mb-8 text-center self-center ">Empresa 100% panameña, con mas de 10 años de experiencia en el mercado, dedicados a la venta, instalación y mantenimiento de sistemas de seguridad y tecnología.<br /><br />
                    
                  </p>
                            
              
              </div>
            </section>

{/* Promociones del Mes */}
<section className="fondo__seccion  border-b py-8">
              
              <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              
                <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800 mb-12">¡Aprovecha nuestras <span className="gradient2 text-white font-normal py-1 px-1">PROMOCIONES</span> del mes de Octubre!</h3>
                {/* Separador <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div> */}
              
                
                <PromotionSlider/>                
                
               
                
                
                
              </div>

            </section>

            {/* Carousel de Clientes */}
<section className="bg-white border-b py-8">
              
              <div className="container mx-auto flex flex-wrap pt-4">
              <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <h3 className="md:w-full w-4/5 mx-auto text-xl md:text-3xl font-bold leading-tight text-center text-gray-800 my-8">CONOCE ALGUNOS DE NUESTROS CLIENTES</h3>
                {/* Separador <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div> */}
              
                
                <ClientesSlider/>                
                
               
                
                
                
              </div>
{/* Seccion Tecnico */}
            </section>
            <section className="fondo__seccion border-b">
              <div className="container max-w-5xl mx-auto">
                
                
                <div className="flex flex-row">
                  <div className="w-4/6 sm:w-1/2">
                  
                  <img className="w-full especial__tecnico" src={fotoTecnico} />
                    
                  </div>
                  
                  <div className="w-full sm:w-1/2 -ml-20 z-10 mt-4">
                  <h3 className="text-lg md:text-3xl text-gray-800 font-bold leading-none mb-3 ml-12">SERVICIO GARANTIZADO</h3>
                  <p className="text-xs w-3/4 ml-12">Obtén 1 año de garantía sobre los equipos que obtengas con nosotros.<br/><br/>
                    
                    Smart Group Panamá está comprometido a ofrecerte los mejores equipos para tu seguridad residencial y empresarial.
                  </p>
                  </div>

                </div>
                
                
              </div>
            </section>


            
            {/* Pricing cards */}
            <section className="bg-gray-100 py-8">
              
              <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">

                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Pricing</h1>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                  
                  <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                    <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                      <div className="p-8 text-3xl font-bold text-center border-b-4">Free</div>
                      <ul className="w-full text-center text-sm">
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                      </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                      <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">£0 <span className="text-base">for one user</span></div>
                      <div className="flex items-center justify-center">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Sign Up</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                      <div className="w-full p-8 text-3xl font-bold text-center">Basic</div>
                      <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                      <ul className="w-full text-center text-base font-bold">
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                      </ul>					
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                      <div className="w-full pt-6 text-4xl font-bold text-center">£x.99 <span className="text-base">/ per user</span></div>
                      <div className="flex items-center justify-center">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Sign Up</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                    <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                      <div className="p-8 text-3xl font-bold text-center border-b-4">Pro</div>
                      <ul className="w-full text-center text-sm">
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                        <li className="border-b py-4">Thing</li>
                      </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                      <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">£x.99 <span className="text-base">/ per user</span></div>
                      <div className="flex items-center justify-center">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Sign Up</button>
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
                
            </section>

            {/* Waves SVG */}
            <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
                  <g className="wave" fill="#f8fafc">
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                  </g>
                  <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                      <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                      <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                      <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            {/* CTA block */}
            <section className="container mx-auto text-center py-6 mb-12">

              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Quieres mejorar la seguridad de tu hogar o negocio?</h1>
              <div className="w-full mb-4">	
                <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
              </div>

              <h3 className="my-4 text-3xl leading-tight">Consulta con nosotros</h3>	

              <form action={data.site.siteMetadata.blog}>
                <button type="submit"
                        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Contáctanos</button>
              </form>

              <Slider/>
            </section>

            {/* Footer */}
            <footer className="bg-white">
            
              <div className="container mx-auto  px-8">

                    <div className="w-full flex flex-col md:flex-row py-6">
                    
                  <div className="flex-1 mb-6">
                  
                    <a className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
                    <img className="w-2/5  md:w-3/5" src={smartLogo} />
                    </a>
                  </div>
                
                
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Links</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">FAQ</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Help</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Terms</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Social</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Facebook</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Linkedin</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Company</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Official Blog</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">About Us</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              
              

            </footer>

        </body>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
