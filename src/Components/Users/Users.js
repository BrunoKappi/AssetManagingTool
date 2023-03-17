import React from 'react'
import './Users.css'
import Accordion from 'react-bootstrap/Accordion';
import { Users as Usuarios } from '../../Data/User';

export default function Users() {
  return (
    <div className='UsersContainer'>

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

    </div>
  )
}
