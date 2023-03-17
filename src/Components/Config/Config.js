import React from 'react'
import Setores from '../Setores/Setores'
import Tipos from '../Tipos/Tipos'
import './Config.css'


export default function Config() {
  return (

    <div className='ConfigContainer'>
      <div className='ListItensContainer'>
        <Tipos />
        <Setores />
      </div>

    </div>


  )
}
