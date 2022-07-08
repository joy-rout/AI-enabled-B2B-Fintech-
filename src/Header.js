
import React from 'react'
import abc_logo from './components/images/Group 20399.svg';
import high_logo from './components/images/logo.svg'

function header() {
  return (
    <>
      
        <div class="logo-flex">
        <div class="logo-item">
            
        <img src={abc_logo} alt="abc_products"></img>
        </div>
        <div class="logo-item">
        <img src={high_logo} alt="high_radius" ></img>
        </div>
        <div class="invoice-list">
            
        </div>
        <div class="invoice-list">
            Invoice List
        </div>
    </div>
    </>
  )
}

export default header