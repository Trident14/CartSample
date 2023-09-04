import { useState } from 'react'

import './App.css'
import Item from './components/items'
import Checkout from './components/checkout'

function App() {
  

  return (
    <>
     <div><h3>Cart Sample</h3></div>
     <div className="main-div">
      <div className="item-holder"><Item /></div>
    
     </div>
    </>
  )
}

export default App
