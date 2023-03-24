import React, { useState } from 'react'
import './Users.css'
import { SetoresTabTitle, TiposTabTitle, TodosTabTitle } from './UsersUtils';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UsersInSetores from '../UsersInSetores/UsersInSetores';
import UsersInTypes from '../UsersInTypes/UsersInTypes';
import UsersList from '../UsersList/UsersList';





export default function Users() {

  const [key, setKey] = useState('Todos');



  return (
    <div className='UsersContainer'>


      <div className='TabsContainer'>
        <button onClick={(k) => setKey('Todos')} className={key === 'Todos' ? 'TabsButtonActive' : ''}>{TodosTabTitle()}</button>
        <button onClick={(k) => setKey('Setores')} className={key === 'Setores' ? 'TabsButtonActive' : ''}>{SetoresTabTitle()}</button>
        <button onClick={(k) => setKey('Tipos')} className={key === 'Tipos' ? 'TabsButtonActive' : ''}>{TiposTabTitle()}</button>
      </div>


      <Tabs id="UsersTabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab className='TabItem' eventKey="Todos" >
          <UsersList />
        </Tab>
        <Tab eventKey="Setores" >
          <UsersInSetores />
        </Tab>
        <Tab eventKey="Tipos"  >
          <UsersInTypes />
        </Tab>
      </Tabs>
    </div>
  )
}














