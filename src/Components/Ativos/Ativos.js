import React, { useState, useEffect } from 'react'
import './Ativos.css'
import Accordion from 'react-bootstrap/Accordion';
import { GetAtivos } from './AtivosUtils';
import Loading from '../LoadingForTabs/Loading';

export default function Ativos() {

  const [ListaDeAtivos, setListaDeAtivos] = useState([])


  useEffect(() => {
    GetAtivos().then((Lista) => {
      setListaDeAtivos(Lista)
    }).catch(Erro => {
      console.error(Erro)
    })
  }, [])


  return (

    <div className='AtivosContainer'>

      {ListaDeAtivos.length !== 0 &&
        <Accordion defaultActiveKey="0" flush>
          {ListaDeAtivos.map((Item, Index) => {
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
      }


      {ListaDeAtivos.length === 0 &&
        <Loading />
      }

    </div>




  )
}
