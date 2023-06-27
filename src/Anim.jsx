import React from 'react'
import './App.css'
import logo from './img/logo.png';
const Anim = () => {
  return (
    <div className="global-block">
      <div className="block-top"></div>
      <div className="block-left"></div>
      <div className="block-right"></div>
      <div className="block-bottom"></div>
      <div className="block-center">
        <img src={logo} alt="logo"/>
        <p>Tournez votre écran</p>
      </div>
      
    </div>
  )
}

export default Anim