import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
//ICONES
import { MdAddCircle, MdDelete, MdModeEditOutline, MdCancel } from "react-icons/md";
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DefaultLocal } from '../../Data/Items';
import { Tooltip } from 'react-tippy';
import { SaveLocaisArmazenamento } from './LocaisArmazenamentoUtils';
import Loading from '../LoadingForTabs/Loading'
import { NotificationAlerta, NotificationErro, NotificationSucesso } from '../../NotificationUtils';
import { GetLocaisArmazenamento } from './LocaisArmazenamentoUtils';

const LocaisArmazenamento = (props) => {


  const [ItemListSelected, setItemListSelected] = useState('');
  const [NewItemList, setNewItemList] = useState('');
  const [Loaded, setLoaded] = useState(false);
  const [EditingItem, setEditingItem] = useState(false);
  const [ListaDeItens, setListaDeItens] = useState([]);

  useEffect(() => {
    GetLocaisArmazenamento().then((Lista) => {
      setListaDeItens(Lista)
      setLoaded(true)
    }).catch(Erro => {
      console.error(Erro)
      setLoaded(true)
    })
  }, [props.LocaisArmazenamento])


  const InitEditing = () => {
    setEditingItem(true)
  }

  const EndEditing = () => {
    setEditingItem(false)
  }

  const HandleSubmiChangeItemName = (e, index, ID) => {
    e.preventDefault()
    var ItensCopy = [...ListaDeItens]
    ItensCopy[index].Local = document.getElementById(ID).value
    console.log(document.getElementById(ID).value)
    SaveLocaisArmazenamento(ItensCopy).then(() => {
      setListaDeItens([...ItensCopy])
      EndEditing()
      NotificationSucesso('Edição', 'Item alterado com Sucesso!')
    })

  }


  const HandleSubmiAddItem = (e) => {
    e.preventDefault()
    const Find = ListaDeItens.find(Item => Item.Local.toLocaleLowerCase() === NewItemList.toLocaleLowerCase())
    if (!Find && NewItemList) {
      var ItensCopy = [...ListaDeItens]
      const NewItem = { ...DefaultLocal, Id: v4(), Local: NewItemList }
      ItensCopy.push(NewItem)

      SaveLocaisArmazenamento(ItensCopy).then(() => {
        setListaDeItens([...ItensCopy])
        setNewItemList('')
        NotificationSucesso('Adição de Local', 'Local adicionado com sucesso!')
      })

    } else {
      NotificationAlerta('Adição de Local', 'Este Local já existe!')
    }

    setNewItemList('')

  }


  const HandleDeleteItem = (Index, Id) => {
    var ItensCopy = [...ListaDeItens]
    ItensCopy.splice(Index, 1);

    const AtivoInThisItem = props.Ativos.find(Ativo => Ativo.StorageLocation.Id === Id)

    if (AtivoInThisItem) {
      NotificationErro('Exclusão', 'Não é permitido excluir este item pois ainda há ativos associados a este Local')
    } else {
      SaveLocaisArmazenamento(ItensCopy).then(() => {
        setListaDeItens([...ItensCopy])
        NotificationAlerta('Exclusão', 'Local excluído!')
      })
    }


  }


  const HandleDrag = (Resultado) => {
    if (!Resultado.destination) return;
    const IndexSource = Resultado.source.index;
    const IndexDestination = Resultado.destination.index;
    const copiedItems = [...ListaDeItens];
    const [removed] = copiedItems.splice(IndexSource, 1); 
    copiedItems.splice(IndexDestination, 0, removed);


    SaveLocaisArmazenamento(copiedItems).then(() => {
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
              Locais de Armazenamento
            </ListGroup.Item>
            <DragDropContext onDragEnd={(result) => { HandleDrag(result) }}>
              <Droppable droppableId={'LocaisArmazenamento'} key={'LocaisArmazenamento'}>
                {(provided) => {
                  return (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {ListaDeItens.map((Item, index) => {
                        return <Draggable key={Item.Id} draggableId={Item.Id} index={index} >
                          {(DragProvided) => {
                            return (
                              <div ref={DragProvided.innerRef} {...DragProvided.draggableProps} {...DragProvided.dragHandleProps}>
                                <ListGroup.Item key={Item.Local + v4()} action as="li">
                                  <span className='CustomGroupListItem' onClick={e => { setItemListSelected(Item.Local); }}>

                                    {EditingItem && ItemListSelected !== Item.Local && <span onClick={e => { setEditingItem(false); }}> {Item.Local}</span>}

                                    {!EditingItem && <span onDoubleClick={e => InitEditing(Item.Local)}> {Item.Local}</span>}

                                    {ItemListSelected === Item.Local && EditingItem &&
                                      <form onSubmit={e => HandleSubmiChangeItemName(e, index, Item.Local)}>

                                        <input maxLength={50} className='CustomGroupListInput' defaultValue={Item.Local} id={Item.Local} type="text" />

                                      </form>
                                    }

                                    {ItemListSelected === Item.Local && !EditingItem &&
                                      <Tooltip title="Editar Item" position="bottom" >
                                        <button onClick={e => InitEditing(Item.Type)}>
                                          <MdModeEditOutline className='ItemEditIcon' />
                                        </button>
                                      </Tooltip>
                                    }

                                    {ItemListSelected === Item.Local && EditingItem &&
                                      <Tooltip title="Cancelar" position="bottom" >
                                        <button onClick={e => EndEditing()}>
                                          <MdCancel className='ItemEditIcon' />
                                        </button>
                                      </Tooltip>
                                    }

                                    {ItemListSelected === Item.Local &&
                                      <Tooltip title="Excluir Item" position="bottom" >
                                        <button onClick={e => HandleDeleteItem(index, Item.Id)}>
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


const ConnectedLocaisArmazenamento = connect((state) => {
  return {
    Usuarios: state.Usuarios,
    LocaisArmazenamento: state.LocaisArmazenamento,
    Ativos: state.Ativos
  }
})(LocaisArmazenamento)

export default ConnectedLocaisArmazenamento