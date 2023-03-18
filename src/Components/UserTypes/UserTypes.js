import React, { useState, useEffect } from 'react'
import './UserTypes.css'
//ICONES
import { MdAddCircle, MdDelete, MdModeEditOutline, MdCancel } from "react-icons/md";
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { NotificationAlerta, NotificationSucesso } from '../../NotificationUtils';
import { Tooltip } from 'react-tippy';
import { GetTipos, SaveTipos } from './UserTypesUtils';
import Loading from '../LoadingForTabs/Loading'
import { DefaultUserRole } from '../../Data/User';

export default function UserTypes() {

  const [ItemListSelected, setItemListSelected] = useState('');
  const [NewItemList, setNewItemList] = useState('');
  const [Loaded, setLoaded] = useState(false);
  const [EditingItem, setEditingItem] = useState(false);
  const [ListaDeItens, setListaDeItens] = useState([]);

  useEffect(() => {
    GetTipos().then((Lista) => {
      setListaDeItens(Lista)
      setLoaded(true)
    }).catch(Erro => {
      console.error(Erro)
      setLoaded(true)
    })
  }, [])


  const InitEditing = () => {
    setEditingItem(true)
  }

  const EndEditing = () => {
    setEditingItem(false)
  }

  const HandleSubmiChangeItemName = (e, index, ID) => {
    e.preventDefault()
    var ItensCopy = [...ListaDeItens]
    ItensCopy[index].Role = document.getElementById(ID).value
    SaveTipos(ItensCopy).then(() => {
      setListaDeItens([...ItensCopy])
      EndEditing()
      NotificationSucesso('Alteração', 'Item alterado com Sucesso!')
    })
  }


  const HandleSubmiChangePermit = ( index) => {
    
    var ItensCopy = [...ListaDeItens]
    ItensCopy[index].IsAdmin = !ItensCopy[index].IsAdmin 
    SaveTipos(ItensCopy).then(() => {
      setListaDeItens([...ItensCopy]) 
      EndEditing()
      NotificationSucesso('Alteração', 'Permissões alteradas com sucesso!')
    })
  }



  const HandleSubmiAddItem = (e) => {
    e.preventDefault()
    const Find = ListaDeItens.find(Item => Item.Role.toLocaleLowerCase() === NewItemList.toLocaleLowerCase())
    if (!Find && NewItemList) {
      var ItensCopy = [...ListaDeItens]
      const NewItem = { ...DefaultUserRole, Id: v4(), Role: NewItemList }
      ItensCopy.push(NewItem)


      SaveTipos(ItensCopy).then(() => { 
        setListaDeItens([...ItensCopy])
        setNewItemList('')
        NotificationSucesso('Adição de Tipo', 'Tipo adicionado com sucesso!')
      })

    }
    setNewItemList('')

  }


  const HandleDeleteItem = (Index) => {
    var ItensCopy = [...ListaDeItens]
    ItensCopy.splice(Index, 1);

    SaveTipos(ItensCopy).then(() => {
      setListaDeItens([...ItensCopy])
      NotificationAlerta('Exclusão', 'Tipo excluído!')
    })

  }


  const HandleDrag = (Resultado) => {
    if (!Resultado.destination) return;
    const IndexSource = Resultado.source.index;
    const IndexDestination = Resultado.destination.index;
    const copiedItems = [...ListaDeItens];
    const [removed] = copiedItems.splice(IndexSource, 1);
    copiedItems.splice(IndexDestination, 0, removed);


    SaveTipos(copiedItems).then(() => {
      setListaDeItens([...copiedItems])
    })

  }

  return (
    <div>
      <div className='CustomGroupList'>

        {ListaDeItens.length === 0 && !Loaded && <Loading />}


        {(ListaDeItens.length !== 0 || Loaded) &&

          <ListGroup as="ul">
            <ListGroup.Item as="li" className='CustomGroupListTitle' >
              Tipos de Usuários
            </ListGroup.Item>
            <DragDropContext onDragEnd={(result) => { HandleDrag(result) }}>
              <Droppable droppableId={'Tipos'} key={'Tipos'}>
                {(provided) => {
                  return (

                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {ListaDeItens.map((Item, index) => {
                        return <Draggable key={Item.Id} draggableId={Item.Id} index={index} >
                          {(DragProvided) => {
                            return (
                              <div ref={DragProvided.innerRef} {...DragProvided.draggableProps} {...DragProvided.dragHandleProps}>
                                <ListGroup.Item key={Item.Role + v4()} action as="li">
                                  <div className='UserTypesRow'>
                                    <Tooltip title="Permissões de Administrador" position="bottom" >
                                      <label class="containerCheck">
                                        <input checked={Item.IsAdmin} onChange={e => HandleSubmiChangePermit(index)} type="checkbox"></input>
                                        <div class="checkmark"></div>
                                      </label>
                                    </Tooltip>
                                    <span className='CustomGroupListItem' onClick={e => { setItemListSelected(Item.Role); }}>

                                      {EditingItem && ItemListSelected !== Item.Role && <span onClick={e => { setEditingItem(false); }}> {Item.Role}</span>}

                                      {!EditingItem && <span onDoubleClick={e => InitEditing(Item.Role)}> {Item.Role}</span>

                                      }





                                      {ItemListSelected === Item.Role && EditingItem &&
                                        <>


                                          <form className='AdminForm' onSubmit={e => HandleSubmiChangeItemName(e, index, Item.Role)}>
                                            <input maxLength={50} className='CustomGroupListInput' defaultValue={Item.Role} id={Item.Role} type="text" />
                                          </form>
                                        </>

                                      }

                                      {ItemListSelected === Item.Role && !EditingItem &&

                                        <Tooltip title="Editar Item" position="bottom" >
                                          <button onClick={e => InitEditing(Item.Role)}>
                                            <MdModeEditOutline className='ItemEditIcon' />
                                          </button>
                                        </Tooltip>
                                      }

                                      {ItemListSelected === Item.Role && EditingItem &&
                                        <Tooltip title="Cancelar" position="bottom" >
                                          <button onClick={e => EndEditing()}>
                                            <MdCancel className='ItemEditIcon' />
                                          </button>
                                        </Tooltip>
                                      }
                                      {ItemListSelected === Item.Role &&
                                        <Tooltip title="Excluir Item" position="bottom" >
                                          <button onClick={e => HandleDeleteItem(index)}>
                                            <MdDelete className='ItemEditIcon' />
                                          </button>
                                        </Tooltip>
                                      }


                                    </span>
                                  </div>
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
            </DragDropContext>




            <ListGroup.Item action as="li">
              <span className='CustomGroupListItem' >
                <form onSubmit={HandleSubmiAddItem} className='CustomGroupListItem'>
                  <input maxLength={50} type="text" placeholder='Novo Item' value={NewItemList} onChange={e => setNewItemList(e.target.value)} />

                  <Tooltip title="Adicionar Item" position="bottom" >
                    <button>
                      <MdAddCircle />
                    </button>
                  </Tooltip>

                </form>
              </span>
            </ListGroup.Item>
          </ListGroup>

        }



      </div>

    </div>
  )
}
