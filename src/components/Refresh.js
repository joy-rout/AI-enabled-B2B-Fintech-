import React from 'react'
import RefreshImg from './images/refresh.png'

function Refresh() {
  return (
    <>
      <button class='refresh' onClick={() => window.location.reload(false)}>
      <img src={RefreshImg} height="18px" alt='search'/>
      </button>
      
      </>
  )
}

export default Refresh