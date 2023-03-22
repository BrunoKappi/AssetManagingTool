import React, { useState, useEffect } from 'react'
import './Ativos.css'
import { ArmazenamentoTabTitle, GetAtivos, TiposTabTitle, TodosTabTitle } from './AtivosUtils';
import Loading from '../LoadingForTabs/Loading';
import TabTitle from '../TabTitle/TabTitle';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AtivosInTypes from '../AtivosInTypes/AtivosInTypes'
import AtivosInLocais from '../AtivosInLocais/AtivosInLocais'


const Ativos = (props) => {

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

        <Tab eventKey="Todos" title={TodosTabTitle()}>
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
        <Tab eventKey="Tipos" title={TiposTabTitle()} >
          <div className='ListItensContainer'>
            <AtivosInTypes />
          </div>
        </Tab>
        <Tab eventKey="Armazenamento" title={ArmazenamentoTabTitle()} >
          <div className='ListItensContainer'>
            <AtivosInLocais />
          </div>
        </Tab>
      </Tabs>









    </div>




  )
}


export default Ativos