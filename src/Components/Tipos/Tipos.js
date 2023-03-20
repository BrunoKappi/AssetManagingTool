import React, { useState, useEffect } from 'react'
import './Tipos.css'
import './CustomGroupListStyles.css'
import { connect } from 'react-redux'
//ICONES
import { MdAddCircle, MdDelete, MdModeEditOutline, MdCancel } from "react-icons/md";
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DefaultItemType } from '../../Data/Items';
import { NotificationAlerta, NotificationSucesso } from '../../NotificationUtils';
import { Tooltip } from 'react-tippy';
import {  GetTipos, SaveTipos } from './TiposUtils';
import Loading from '../LoadingForTabs/Loading'

const Tipos = (props) => {

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
  }, [props.TiposAtivos]) 


  const InitEditing = () => {
    setEditingItem(true)
  }

  const EndEditing = () => {
    setEditingItem(false)
  }

  const HandleSubmiChangeItemName = (e, index, ID) => {
    e.preventDefault()
    var ItensCopy = [...ListaDeItens]
    ItensCopy[index].Type = document.getElementById(ID).value
    SaveTipos(ItensCopy).then(() => {
      setListaDeItens([...ItensCopy])
      EndEditing()
      NotificationSucesso('Alteração', 'Item alterado com Sucesso!')
    })

  }


  const HandleSubmiAddItem = (e) => {
    e.preventDefault()
    const Find = ListaDeItens.find(Item => Item.Type.toLocaleLowerCase() === NewItemList.toLocaleLowerCase())
    if (!Find && NewItemList) {
      var ItensCopy = [...ListaDeItens]
      const NewItem = { ...DefaultItemType, Id: v4(), Type: NewItemList }
      ItensCopy.push(NewItem)

     

      SaveTipos(ItensCopy).then(() => {
        setListaDeItens([...ItensCopy])
        setNewItemList('')
        NotificationSucesso('Adição de Tipo', 'Tipo adicionado com sucesso!')
      })

    }else{
      NotificationAlerta('Adição de Tipo', 'Este item já existe!')
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
              Tipos de Ativos
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
                                <ListGroup.Item key={Item.Type + v4()} action as="li">
                                  <span className='CustomGroupListItem' onClick={e => { setItemListSelected(Item.Type); }}>

                                    {EditingItem && ItemListSelected !== Item.Type && <span onClick={e => { setEditingItem(false); }}> {Item.Type}</span>}

                                    {!EditingItem && <span onDoubleClick={e => InitEditing(Item.Type)}> {Item.Type}</span>

                                    }

                                    {ItemListSelected === Item.Type && EditingItem &&
                                      <form onSubmit={e => HandleSubmiChangeItemName(e, index, Item.Type)}>
                                        <input maxLength={50} className='CustomGroupListInput' defaultValue={Item.Type} id={Item.Type} type="text" />
                                      </form>
                                    }

                                    {ItemListSelected === Item.Type && !EditingItem &&

                                      <Tooltip title="Editar Item" position="bottom" >
                                        <button onClick={e => InitEditing(Item.Type)}>
                                          <MdModeEditOutline className='ItemEditIcon' />
                                        </button>
                                      </Tooltip>
                                    }

                                    {ItemListSelected === Item.Type && EditingItem &&
                                      <Tooltip title="Cancelar" position="bottom" >
                                        <button onClick={e => EndEditing()}>
                                          <MdCancel className='ItemEditIcon' />
                                        </button>
                                      </Tooltip>
                                    }
                                    {ItemListSelected === Item.Type &&
                                      <Tooltip title="Excluir Item" position="bottom" >
                                        <button onClick={e => HandleDeleteItem(index)}>
                                          <MdDelete className='ItemEditIcon' />
                                        </button>
                                      </Tooltip>
                                    }


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



const ConnectedTipos = connect((state) => {
  return {
      TiposAtivos: state.TiposAtivos
  }
})(Tipos)
 
export default ConnectedTipos