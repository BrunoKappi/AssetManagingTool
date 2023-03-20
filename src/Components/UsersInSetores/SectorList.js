import React, { useState } from 'react'
import { connect } from 'react-redux'
import './SectorList.css'
//ICONES
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { RiUser3Fill } from 'react-icons/ri';
import { MdVerifiedUser } from 'react-icons/md';
import { Tooltip } from 'react-tippy';

const SectorList = (props) => {


  const [ListaDeItens,] = useState([...props.Users.filter(User => User.Sector.Id === props.Setor.Id)]);

  /*
  const HandleDrag = (Resultado) => {
    if (!Resultado.destination) return;
    const IndexSource = Resultado.source.index;
    const IndexDestination = Resultado.destination.index;
    const copiedItems = [...ListaDeItens];
    const [removed] = copiedItems.splice(IndexSource, 1);
    copiedItems.splice(IndexDestination, 0, removed);
  }*/

  return (
    <div>
      <div className='ShowOnlyCustomGroupList'>

        {(ListaDeItens.length !== 0) &&

          <ListGroup as="ul">
            <ListGroup.Item as="li" className='ShowOnlyCustomGroupListTitle' >
              {props.Setor.Setor}
            </ListGroup.Item>

            <Droppable droppableId={props.Setor.Id} key={props.Setor.Id}>
              {(provided, snapshot) => {
                return (
                  <div className={snapshot.isDraggingOver ? 'MarginBottom' : ''} {...provided.droppableProps} ref={provided.innerRef}>
                    {ListaDeItens.sort((a, b) => a.Name.localeCompare(b.Name)).map((Item, index) => {
                      const IsAdmin = props.UserTypes.find(UserType => UserType.Id === Item.Type.Id).IsAdmin
                      //console.log(IsAdmin)
                      return <Draggable action as="li" key={Item.Id} draggableId={Item.Id} index={index} >
                        {(DragProvided) => {
                          return (
                            <div ref={DragProvided.innerRef} {...DragProvided.draggableProps} {...DragProvided.dragHandleProps}>
                              <ListGroup.Item key={Item.Name + v4()} >
                                <span className='ShowOnlyCustomGroupListItem'>
                                  {IsAdmin ?
                                    <Tooltip title="Possui permissões de Administrador" position="bottom" >
                                      <MdVerifiedUser className='ShowOnlyCustomGroupIcon' />
                                    </Tooltip>
                                    :
                                    <Tooltip title="Não possui permissões de Administrador" position="bottom" >
                                      <RiUser3Fill className='ShowOnlyCustomGroupIcon' />
                                    </Tooltip>
                                  }
                                  <span> {Item.Name}</span>
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

            <ListGroup.Item action as="li"></ListGroup.Item>


          </ListGroup>

        }



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
