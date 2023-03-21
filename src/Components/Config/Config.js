import React, { useState } from 'react'
import './Config.css'
import Masonry from "react-masonry-css";
import TabTitle from '../TabTitle/TabTitle';
import EditableCustomList from '../EditableCustomList/EditableCustomList'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Config() {


  const [key, setKey] = useState('Ativos');

  const breakpointColumnsObj = {
    default: 3,
    1250: 2,
    950: 1
  };



  return (



    <div className='ConfigContainer'>

      <TabTitle Text="Configurações" />

      <Tabs id="UsersTabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">

        <Tab eventKey="Ativos" title="Ativos">
          <div className='ListItensContainer'>
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"   >
              <EditableCustomList Title="Tipos de Ativos" Module="TiposAtivos" />
              <EditableCustomList Title="Locais de Armazenamento" Module="Locais" />
              <EditableCustomList Title="Status de Ativos" Module="StatusAtivos" />
              <EditableCustomList Title="Tipos de Uso" Module="TiposUso" />
            </Masonry>
          </div>
        </Tab>
        <Tab eventKey="Setores e Usuários" title="Setores e Usuários" >
          <div className='ListItensContainer'>
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column"  >
              <EditableCustomList Title="Setores da Empresa" Module="Setores" />
              <EditableCustomList Title="Tipos de Usuários" Module="TiposUsuarios" />
            </Masonry>
          </div>
        </Tab>
      </Tabs>
      
    </div>


  )
}
