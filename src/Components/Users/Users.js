import React, { useState, useEffect } from 'react'
import './Users.css'
import Accordion from 'react-bootstrap/Accordion';
import { GetUsers, GetUsersTypes } from './UsersUtils';
import Loading from '../LoadingForTabs/Loading';
import TabTitle from '../TabTitle/TabTitle';
import Select from 'react-select';

export default function Users() {
  const [ListaDeUsuarios, setListaDeUsuarios] = useState([])
  const [OptionsListTypes, setOptionsListTypes] = useState([])
  const [Loaded, setLoaded] = useState(false);
  const [selectedOption, ] = useState()

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
                <p>{Item.Role}</p>
              </Accordion.Body>
            </Accordion.Item>
          })}
        </Accordion>
      }


      {ListaDeUsuarios.length === 0 && !Loaded &&
        <Loading />
      }

    </div>
  )
}












