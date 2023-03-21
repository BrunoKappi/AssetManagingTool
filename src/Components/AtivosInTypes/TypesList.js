import React, { useState } from 'react'
import { connect } from 'react-redux'
import './TypesList.css'
//ICONES
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Tooltip } from 'react-tippy';

const SectorList = (props) => {


  const [ListaDeItens,] = useState([...props.Ativos.filter(Ativo => Ativo.Type.Id === props.TipoAtivo.Id)]);


  return (
    <div>
      <div className='ShowOnlyCustomGroupList'>



        <ListGroup as="ul">
          <ListGroup.Item as="li" className='ShowOnlyCustomGroupListTitle' >
            {props.TipoAtivo.Value}
          </ListGroup.Item>

          <Droppable droppableId={props.TipoAtivo.Id} key={props.TipoAtivo.Id}>
            {(provided, snapshot) => {
              return (
                <div className={snapshot.isDraggingOver ? 'MarginBottom' : ''} {...provided.droppableProps} ref={provided.innerRef}>
                  {ListaDeItens.sort((a, b) => a.Item.localeCompare(b.Item)).map((Item, index) => {
                    return <Draggable action as="li" key={Item.Id} draggableId={Item.Id} index={index} >
                      {(DragProvided) => {
                        return (
                          <div ref={DragProvided.innerRef} {...DragProvided.draggableProps} {...DragProvided.dragHandleProps}>
                            <ListGroup.Item key={Item.Item + v4()} >
                              <span className='ShowOnlyCustomGroupListItem'>
                                <span> {Item.Item}</span>
                              </span>
                            </ListGroup.Item>
                          </div>
                        )
                      }}
                    </Draggable>
                  })}
                </div>

              );
            }}
          </Droppable>

          {ListaDeItens.length === 0 && <ListGroup.Item key={v4()} >

            <Droppable droppableId={props.TipoAtivo.Id} key={props.TipoAtivo.Id}>
              {(provided, snapshot) => {
                return (
                  <div  {...provided.droppableProps} ref={provided.innerRef}>
                    <Tooltip title="Arraste e solte usuários nesta área" position="bottom" >
                      <span className='ShowOnlyCustomGroupListItem'>
                        <span className='ShowOnlyCustomGroupListItemSpan'>Nenhum Usuário</span>
                      </span>
                    </Tooltip>
                  </div>
                );
              }}
            </Droppable>


          </ListGroup.Item>

          }

          <ListGroup.Item action as="li"></ListGroup.Item>


        </ListGroup>





      </div>

    </div>
  )
}



const ConnectedSectorList = connect((state) => {
  return {
    Setores: state.Setores
  }
})(SectorList)


export default ConnectedSectorList
