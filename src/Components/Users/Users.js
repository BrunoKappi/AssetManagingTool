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

      


      <Tabs id="UsersTabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab className='TabItem' eventKey="Todos" title={TodosTabTitle()}>
          <UsersList />
        </Tab>
        <Tab eventKey="Setores" title={SetoresTabTitle()}>
          <UsersInSetores />
        </Tab>
        <Tab eventKey="Tipos" title={TiposTabTitle()} >
          <UsersInTypes />
        </Tab>
      </Tabs>
    </div>
  )
}














