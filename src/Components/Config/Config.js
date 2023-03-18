import React from 'react'
import Setores from '../Setores/Setores'
import Tipos from '../Tipos/Tipos'
import './Config.css'
import Masonry from "react-masonry-css";
import TabTitle from '../TabTitle/TabTitle';
import UserTypes from '../UserTypes/UserTypes';

export default function Config() {

  const breakpointColumnsObj = {
    default: 3,
    1250: 2,
    950: 1
  };



  return (



    <div className='ConfigContainer'>

      <TabTitle Text="Configurações" />

      <div className='ListItensContainer'>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"   >
          <Tipos />
          <Setores />
          <UserTypes />

        </Masonry>
      </div>

    </div>


  )
}
