import React, { useState, useEffect } from 'react'
import './Users.css'
import Accordion from 'react-bootstrap/Accordion';
import { GetUsers, GetUsersTypes } from './UsersUtils';
import Loading from '../LoadingForTabs/Loading';
import TabTitle from '../TabTitle/TabTitle';
import Select from 'react-select';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UsersInSetores from '../UsersInSetores/UsersInSetores';
import UsersInTypes from '../UsersInTypes/UsersInTypes';




export default function Users() {
  const [ListaDeUsuarios, setListaDeUsuarios] = useState([])
  const [OptionsListTypes, setOptionsListTypes] = useState([])
  const [Loaded, setLoaded] = useState(false);
  const [selectedOption,] = useState()
  const [key, setKey] = useState('Todos');

  useEffect(() => {
    GetUsers().then((Lista) => {
      setListaDeUsuarios(Lista)
      setLoaded(true)
    }).catch(Erro => {
      console.error(Erro)
      setLoaded(true)
    })

    GetUsersTypes().then((Lista) => {
      setOptionsListTypes(Lista)
    }).catch(Erro => {
      console.error(Erro)
    })
  }, [])

  return (
    <div className='UsersContainer'>

      <TabTitle Text="Usuários" />


      <Tabs id="UsersTabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="Todos" title="Todos">
          <Select
            value={selectedOption}
            options={OptionsListTypes}
            placeholder="Tipo de Usuário"
          />

          {(ListaDeUsuarios.length !== 0 || Loaded) &&
            <Accordion defaultActiveKey="0" flush>
              {ListaDeUsuarios.map((Item, Index) => {
                return <Accordion.Item key={Item.Id} eventKey={Index}>
                  <Accordion.Header>{Item.Name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{Item.Name}</p>
                    <p>{Item.Email}</p>
                    <p>{Item.Type.Role}</p>
                  </Accordion.Body>
                </Accordion.Item>
              })}
            </Accordion>
          }


          {ListaDeUsuarios.length === 0 && !Loaded &&
            <Loading />
          }
        </Tab>
        <Tab eventKey="Setores" title="Setores">
          <UsersInSetores />
        </Tab>
        <Tab eventKey="Tipos" title="Tipos" >
          <UsersInTypes />
        </Tab>
      </Tabs>



    </div>
  )
}












