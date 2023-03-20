import React, { useState, useEffect } from 'react'
import './Ativos.css'
import Accordion from 'react-bootstrap/Accordion';
import { GetAtivos } from './AtivosUtils';
import Loading from '../LoadingForTabs/Loading';
import TabTitle from '../TabTitle/TabTitle';

export default function Ativos() {

  const [ListaDeAtivos, setListaDeAtivos] = useState([])
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    GetAtivos().then((Lista) => {
      setListaDeAtivos(Lista)
      setLoaded(true)
    }).catch(Erro => {
      console.error(Erro)
      setLoaded(true)
    })
  }, [])


  return (

    <div className='AtivosContainer'>

      <TabTitle Text="Lista de Ativos" />

      {(ListaDeAtivos.length !== 0 || Loaded) &&
        <Accordion defaultActiveKey="0" flush>
          {ListaDeAtivos.map((Item, Index) => {
            return <Accordion.Item key={Item.Id} eventKey={Index}>
              <Accordion.Header>{Item.Item}</Accordion.Header>
              <Accordion.Body>
                <p>{Item.StorageLocation.Id}</p>
                <p>{Item.Status}</p>
                <p>{Item.Type.Id}</p>
                <p>{Item.Usage}</p>
              </Accordion.Body>
            </Accordion.Item>
          })}
        </Accordion>
      }


      {ListaDeAtivos.length === 0 && !Loaded &&
        <Loading />
      }

    </div>




  )
}
