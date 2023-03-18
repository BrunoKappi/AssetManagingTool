import React, { useState, useEffect } from 'react'
//ICONES
import { MdAddCircle, MdDelete, MdModeEditOutline, MdCancel } from "react-icons/md";
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {  DefaultSetor } from '../../Data/Items';
import { Tooltip } from 'react-tippy';
import { GetSetores, SaveSetores } from './SetoresUtils';
import Loading from '../LoadingForTabs/Loading'
import { NotificationAlerta, NotificationSucesso } from '../../NotificationUtils';

export default function Setores() {


  const [ItemListSelected, setItemListSelected] = useState('');
  const [NewItemList, setNewItemList] = useState('');
  const [Loaded, setLoaded] = useState(false);
  const [EditingItem, setEditingItem] = useState(false);
  const [ListaDeItens, setListaDeItens] = useState([]);

  useEffect(() => {
    GetSetores().then((Lista) => {
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
    ItensCopy[index].Setor = document.getElementById(ID).value
    console.log(document.getElementById(ID).value)
    SaveSetores(ItensCopy).then(() => {
      setListaDeItens([...ItensCopy])
      EndEditing()
      NotificationSucesso('Adição de Setor', 'Item alterado com Sucesso!')
    })

  }


  const HandleSubmiAddItem = (e) => {
    e.preventDefault()
    const Find = ListaDeItens.find(Item => Item.Setor.toLocaleLowerCase() === NewItemList.toLocaleLowerCase())
    if (!Find && NewItemList) {
      var ItensCopy = [...ListaDeItens]
      const NewItem = { ...DefaultSetor, Id: v4(), Setor: NewItemList }
      ItensCopy.push(NewItem)

      SaveSetores(ItensCopy).then(() => {
        setListaDeItens([...ItensCopy])
        setNewItemList('')
        NotificationSucesso('Adição de Setor', 'Setor adicionado com sucesso!')
      })

    }

    setNewItemList('')

  }


  const HandleDeleteItem = (Index) => {
    var ItensCopy = [...ListaDeItens]
    ItensCopy.splice(Index, 1);

    SaveSetores(ItensCopy).then(() => {
      setListaDeItens([...ItensCopy])
      NotificationAlerta('Exclusão', 'Setor excluído!')
    })
  }


  const HandleDrag = (Resultado) => {
    if (!Resultado.destination) return;
    const IndexSource = Resultado.source.index;
    const IndexDestination = Resultado.destination.index;
    const copiedItems = [...ListaDeItens];
    const [removed] = copiedItems.splice(IndexSource, 1);
    copiedItems.splice(IndexDestination, 0, removed);


    SaveSetores(copiedItems).then(() => {
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
              Setores da Empresa
            </ListGroup.Item>
            <DragDropContext onDragEnd={(result) => { HandleDrag(result) }}>
              <Droppable droppableId={'Setores'} key={'Setores'}>
                {(provided) => {
                  return (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {ListaDeItens.map((Item, index) => {
                        return <Draggable key={Item.Id} draggableId={Item.Id} index={index} >
                          {(DragProvided) => {
                            return (
                              <div ref={DragProvided.innerRef} {...DragProvided.draggableProps} {...DragProvided.dragHandleProps}>
                                <ListGroup.Item key={Item.Setor + v4()} action as="li">
                                  <span className='CustomGroupListItem' onClick={e => { setItemListSelected(Item.Setor); }}>

                                    {EditingItem && ItemListSelected !== Item.Setor && <span onClick={e => { setEditingItem(false); }}> {Item.Setor}</span>}

                                    {!EditingItem && <span onDoubleClick={e => InitEditing(Item.Setor)}> {Item.Setor}</span>}

                                    {ItemListSelected === Item.Setor && EditingItem &&
                                      <form onSubmit={e => HandleSubmiChangeItemName(e, index, Item.Setor)}>

                                        <input maxLength={50} className='CustomGroupListInput' defaultValue={Item.Setor} id={Item.Setor} type="text" />

                                      </form>
                                    }

                                    {ItemListSelected === Item.Setor && !EditingItem &&
                                      <Tooltip title="Editar Item" position="bottom" >
                                        <button onClick={e => InitEditing(Item.Type)}>
                                          <MdModeEditOutline className='ItemEditIcon' />
                                        </button>
                                      </Tooltip>
                                    }

                                    {ItemListSelected === Item.Setor && EditingItem &&
                                      <Tooltip title="Cancelar" position="bottom" >
                                        <button onClick={e => EndEditing()}>
                                          <MdCancel className='ItemEditIcon' />
                                        </button>
                                      </Tooltip>
                                    }

                                    {ItemListSelected === Item.Setor &&
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

    </div >
  )
}

