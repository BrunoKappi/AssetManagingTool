import React, { useState } from 'react'
import { connect } from 'react-redux'
import './TypesList.css'
//ICONES
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { RiUser3Fill } from 'react-icons/ri';
import { MdVerifiedUser } from 'react-icons/md';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { Tooltip } from 'react-tippy';
import { SaveTipos } from '../UserTypes/UserTypesUtils';
import { NotificationSucesso } from '../../NotificationUtils';

const TypesList = (props) => {


  const [ListaDeItens,] = useState([...props.Users.filter(User => User.Type.Id === props.TipoUsuario.Id)]);


  const HandleSubmiChangePermit = (Type) => {
    var ItensCopy = [...props.UserTypes]
    const IndexOfType = ItensCopy.indexOf(Type)
    ItensCopy[IndexOfType].IsAdmin = !ItensCopy[IndexOfType].IsAdmin
    SaveTipos(ItensCopy).then(() => {
      NotificationSucesso('Alteração', 'Permissões alteradas com sucesso!')
    })
  }


  return (
    <div>
      <div className='ShowOnlyCustomGroupList'>

        <ListGroup as="ul">
          <ListGroup.Item as="li" className='ShowOnlyCustomGroupListTitle' >
            {props.TipoUsuario.Role}
            <Tooltip title="Possui permissões de Administrador" position="bottom" >
              {props.TipoUsuario.IsAdmin ? <ImCheckboxChecked className='ShowOnlyCustomGroupListCheckbox' onClick={e => HandleSubmiChangePermit(props.TipoUsuario)} /> : <ImCheckboxUnchecked className='ShowOnlyCustomGroupListCheckbox' onClick={e => HandleSubmiChangePermit(props.TipoUsuario)} />}
            </Tooltip>
          </ListGroup.Item>

          <Droppable droppableId={props.TipoUsuario.Id} key={props.TipoUsuario.Id}>
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



          {ListaDeItens.length === 0 && <ListGroup.Item key={v4()} >

            <Droppable droppableId={props.TipoUsuario.Id} key={props.TipoUsuario.Id}>
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



const ConnectedTypesList = connect((state) => {
  return {
    TiposUsuarios: state.TiposUsuarios
  }
})(TypesList)


export default ConnectedTypesList
