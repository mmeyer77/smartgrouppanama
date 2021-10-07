import React, { useState } from "react"
import onClickOutside from "react-onclickoutside"


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  Menu.handleClickOutside = () => setIsOpen(false)
  return (
    <>
    <div id="mobile-menu" className={isOpen ? "mobile-menu z-50 absolute w-full  bg-white text-black transition -active " : "hidden mobile-menu z-50 absolute w-full  bg-white text-black transition"} >

              <ul class="">
                  <li class="active"><a href="index.html" class="block text-sm px-2 py-4  hover:bg-green-500 font-semibold">Inicio</a></li>
                  <li><a href="#servicios" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 ">Services</a></li>
                  <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
                  <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
              </ul>
          </div>
          <button id="mobileb" class="outline-none mobile-menu-button z-50" onClick={toggle}>
    <svg 
        class="w-6 h-6 text-gray-500"
        x-show="!showMenu"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
</button>
          </>

    
          
  )
}

const clickOutsideConfig={
    handleClickOutside: () => Menu.handleClickOutside
}

export default onClickOutside(Menu,clickOutsideConfig)  