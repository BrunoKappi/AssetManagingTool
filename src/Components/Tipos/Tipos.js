import React, { useState } from 'react'
import './Tipos.css'
//ICONES
import { MdAddCircle, MdDelete, MdModeEditOutline, MdCancel } from "react-icons/md";
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DefaultItemType, ItemTypes } from '../../Data/Items';

export default function Tipos() {

  const [ItemListSelected, setItemListSelected] = useState('');
  const [NewItemList, setNewItemList] = useState('');
  const [EditingItem, setEditingItem] = useState(false);
  const [ListaDeItens, setListaDeItens] = useState([...ItemTypes]);




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
    console.log(document.getElementById(ID).value)
    setListaDeItens([...ItensCopy])
    EndEditing()

  }


  const HandleSubmiAddItem = (e) => {
    e.preventDefault()
    const Find = ListaDeItens.find(Item => Item.Type.toLocaleLowerCase() === NewItemList.toLocaleLowerCase())
    if (!Find) {
      var ItensCopy = [...ListaDeItens]
      const NewItem = { ...DefaultItemType, Id: v4(), Type: NewItemList }
      ItensCopy.push(NewItem)
      setListaDeItens([...ItensCopy])
      setNewItemList('')
    }
    setNewItemList('')

  }


  const HandleDeleteItem = (Index) => {
    var ItensCopy = [...ListaDeItens]
    ItensCopy.splice(Index, 1);
    setListaDeItens([...ItensCopy])
  }


  const HandleDrag = (Resultado) => {
    if (!Resultado.destination) return;
    const IndexSource = Resultado.source.index;
    const IndexDestination = Resultado.destination.index;
    const copiedItems = [...ListaDeItens];
    const [removed] = copiedItems.splice(IndexSource, 1);
    copiedItems.splice(IndexDestination, 0, removed);
    setListaDeItens([...copiedItems])
  }

  return (
    <div>
      <div className='CustomGroupList'>



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

                                  {!EditingItem && <span onDoubleClick={e => InitEditing(Item.Type)}> {Item.Type}</span>}

                                  {ItemListSelected === Item.Type && EditingItem &&
                                    <form onSubmit={e => HandleSubmiChangeItemName(e, index, Item.Type)}>
                                      <input maxLength={50} className='CustomGroupListInput' defaultValue={Item.Type} id={Item.Type} type="text" />
                                    </form>
                                  }

                                  {ItemListSelected === Item.Type && !EditingItem &&
                                    <button onClick={e => InitEditing(Item.Type)}>
                                      <MdModeEditOutline className='ItemEditIcon' />
                                    </button>}

                                  {ItemListSelected === Item.Type && EditingItem &&
                                    <button onClick={e => EndEditing()}>
                                      <MdCancel className='ItemEditIcon' />
                                    </button>}
                                  {ItemListSelected === Item.Type &&
                                    <button onClick={e => HandleDeleteItem(index)}>
                                      <MdDelete className='ItemEditIcon' />
                                    </button>}


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
                <button>
                  <MdAddCircle />
                </button>
              </form>
            </span>
          </ListGroup.Item>
        </ListGroup>





      </div>

    </div>
  )
}
