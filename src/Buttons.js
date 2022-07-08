import React from 'react'
import Search from './components/images/search.svg'
import AdvanceBtn from './components/Advance_srch'
import AnltcsBtn from './components/Analytics_btn'
import Predict from './components/Predict'
import RefreshBtn from './components/Refresh'
import Dlt from './components/Delete'
import Addbtn from './components/Addbtn'
import Edit from './components/Edit'


function Buttons() {
  return (
    <>
        

        <div class="wrapper">
        
        <div class="button-container">
        <Predict/>
        <AnltcsBtn/>
        <AdvanceBtn/>
        <RefreshBtn/>
            <div class="search-box">
                <input class="search-txt" type="text" name="" id="search-inv" placeholder="Search by Invoice Number"/>
                <a class="search-btn" href="#">
                    <img src={Search} height="18px" alt='search'/>
                </a>
            </div>
             <Dlt/>
             <Edit/>
            <Addbtn/>
        </div>
      </div>

      
      
      </>
    
    
  )
}

export default Buttons


