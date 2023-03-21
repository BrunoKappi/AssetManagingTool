import React, { useState, useEffect } from 'react'
import './Ativos.css'
import { GetAtivos } from './AtivosUtils';
import Loading from '../LoadingForTabs/Loading';
import TabTitle from '../TabTitle/TabTitle';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AtivosInTypes from '../AtivosInTypes/AtivosInTypes'

export default function Ativos() {

  const [ListaDeAtivos, setListaDeAtivos] = useState([])
  const [Loaded, setLoaded] = useState(false);
  const [key, setKey] = useState('Todos');

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


      <Tabs id="UsersTabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">

        <Tab eventKey="Todos" title="Todos">
          <div className='ListItensContainer'>
            {(ListaDeAtivos.length !== 0 || Loaded) &&
              <ListGroup>
                <DragDropContext onDragEnd={(result) => { console.log(result) }}>
                  <Droppable droppableId={'AtivosLista'} key={'AtivosLista'}>
                    {(provided) => {
                      return (
                        <div {...provided.droppableProps} ref={provided.innerRef}>


                          {ListaDeAtivos.map((Item, Index) => {
                            return <Draggable key={Item.Id} draggableId={Item.Id} index={Index} >
                              {(DragProvided) => {
                                return (
                                  <div ref={DragProvided.innerRef} {...DragProvided.draggableProps} {...DragProvided.dragHandleProps}>
                                    <ListGroup.Item>{Item.Item}</ListGroup.Item>
                                  </div>
                                )
                              }}
                            </Draggable>


                          })}


                        </div>
                      );
                    }}
                  </Droppable>
                </DragDropContext>
              </ListGroup>}
            {ListaDeAtivos.length === 0 && !Loaded && <Loading />}
            {ListaDeAtivos.length === 0 && Loaded && <div>Não há ativos</div>}

          </div>
        </Tab>
        <Tab eventKey="Tipos" title="Tipos" >
          <div className='ListItensContainer'>
            <AtivosInTypes />
          </div>
        </Tab>
        <Tab eventKey="Armazenamento" title="Armazenamento" >
          <div className='ListItensContainer'>
            Locais de Armazenamento
          </div>
        </Tab>
      </Tabs>









    </div>




  )
}
