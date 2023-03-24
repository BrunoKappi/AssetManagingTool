import React, { useState, useEffect } from 'react'
import './Ativos.css'
import { ArmazenamentoTabTitle, TiposTabTitle, TodosTabTitle } from './AtivosUtils';
import Loading from '../LoadingForTabs/Loading';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AtivosInTypes from '../AtivosInTypes/AtivosInTypes'
import AtivosInLocais from '../AtivosInLocais/AtivosInLocais'
import { GetAtivos } from '../../Functions/Middleware';


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


      <div className='TabsContainer'>
        <button onClick={(k) => setKey('Todos')} className={key === 'Todos' ? 'TabsButtonActive' : ''}>{TodosTabTitle()}</button>
        <button onClick={(k) => setKey('Armazenamento')} className={key === 'Armazenamento' ? 'TabsButtonActive' : ''}>{ArmazenamentoTabTitle()}</button>
        <button onClick={(k) => setKey('Tipos')} className={key === 'Tipos' ? 'TabsButtonActive' : ''}>{TiposTabTitle()}</button>
      </div>


      <Tabs id="UsersTabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">

        <Tab eventKey="Todos" >
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
        <Tab eventKey="Tipos" >
          <div className='ListItensContainer'>
            <AtivosInTypes />
          </div>
        </Tab>
        <Tab eventKey="Armazenamento">
          <div className='ListItensContainer'>
            <AtivosInLocais />
          </div>
        </Tab>
      </Tabs>









    </div>




  )
}


export default Ativos