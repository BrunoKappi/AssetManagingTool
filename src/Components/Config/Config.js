import React from 'react'
import './Config.css'
import Masonry from "react-masonry-css";
import TabTitle from '../TabTitle/TabTitle';
import SubTabTitle from '../SubTabTitle/SubTabTitle';
import EditableCustomList from '../EditableCustomList/EditableCustomList'

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
          <EditableCustomList Title="Tipos de Ativos" Module="TiposAtivos" />
          <EditableCustomList Title="Locais de Armazenamento" Module="Locais" />
        </Masonry>

        <SubTabTitle Text="Usuários e Setores" />

        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"  >
          <EditableCustomList Title="Setores da Empresa" Module="Setores" />
          <EditableCustomList Title="Tipos de Usuários" Module="TiposUsuarios" />
        </Masonry>

      </div>

    </div>


  )
}
