import React, { useState, useEffect } from 'react'
import './Users.css'
import Accordion from 'react-bootstrap/Accordion';
import { Users as Usuarios } from '../../Data/User';
import { GetUsers } from './UsersUtils';
import Loading from '../LoadingForTabs/Loading';

export default function Users() {
  const [ListaDeUsuarios, setListaDeUsuarios] = useState([])


  useEffect(() => {
    GetUsers().then((Lista) => {
      setListaDeUsuarios(Lista)
    }).catch(Erro => {
      console.error(Erro)
    })
  }, [])

  return (
    <div className='UsersContainer'>

      {ListaDeUsuarios.length !== 0 &&
        <Accordion defaultActiveKey="0" flush>
          {Usuarios.map((Item, Index) => {
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


      {ListaDeUsuarios.length === 0 &&
        <Loading />
      }

    </div>
  )
}












