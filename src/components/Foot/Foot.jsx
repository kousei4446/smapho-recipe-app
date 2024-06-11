import React from 'react'

import "./Foot.css"
import { Home, Add, Search } from '@mui/icons-material';

function Foot({setActiveModal}) {
  return (
    <div className='footer'>
      <button className='home-btn'><Home sx={{ fontSize: 40, color: 'black' }} /></button>
      <button className='serch-btn' onClick={() => setActiveModal({ type: "searchModal" })}><Search sx={{ fontSize: 40, color: 'black' }} /></button>
      <button className='add-btn' onClick={()=>setActiveModal({type: "addModal"})}><Add sx={{ fontSize: 50, color: 'black' }} /></button>
    </div>
  )
}

export default Foot