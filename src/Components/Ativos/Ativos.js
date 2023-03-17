import React from 'react'
import './Ativos.css'
import { Items } from '../../Data/Items'
import Accordion from 'react-bootstrap/Accordion';

export default function Ativos() {
  return (

    <div className='AtivosContainer'> 
      <Accordion defaultActiveKey="0" flush>

        {Items.map((Item, Index) => {
          return <Accordion.Item key={Item.Id} eventKey={Index}>
            <Accordion.Header>{Item.Item}</Accordion.Header>
            <Accordion.Body>
              <p>{Item.StorageLocatiom}</p>
              <p>{Item.Status}</p>
              <p>{Item.Type}</p>
              <p>{Item.Usage}</p>              
            </Accordion.Body>
          </Accordion.Item>


        })}

      </Accordion>
    </div>


  )
}
