import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './EditableCustomList.css'
//ICONES

import ListGroup from 'react-bootstrap/ListGroup';
import { v4 } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DefaultItemType } from '../../Data/Items';
import { NotificationSucesso } from '../../NotificationUtils';
import { Tooltip } from 'react-tippy';
import { GetNotificationErrorMessageDelete, GetNotificationSuccessMessageAdd, GetNotificationExistsMessageAdd, GetNotificationSuccessMessageDelete, GetNotificationSuccessMessageChangeName } from './EditableCustomListUtils';
import Loading from '../LoadingForTabs/Loading'


import { UilLabel, UilPuzzlePiece, UilBox, UilPlay, UilPlus, UilTrashAlt, UilBackspace, UilPen } from '@iconscout/react-unicons'
import { fetchFunctions, saveFunctions, SaveUserTipos } from '../../Functions/Middleware';

const CustomListIcon = {
  TiposAtivos: <UilLabel />,
  Setores: <UilPuzzlePiece />,
  TiposUsuarios: <UilLabel />,
  Locais: <UilBox />,
  StatusAtivos: <UilLabel />,
  TiposUso: <UilPlay />
};

const EditableCustomList = (props) => {

  const [ItemListSelected, setItemListSelected] = useState('');
  const [NewItemList, setNewItemList] = useState('');
  const [Loaded, setLoaded] = useState(false);
  const [EditingItem, setEditingItem] = useState(false);
  const [ListaDeItens, setListaDeItens] = useState([]);





  useEffect(() => {


    // Procura a função get correspondente com base no nome do módulo/prop
    const fetchFunction = fetchFunctions[props.Module] || (() => Promise.resolve());

    // Executa a função get e atualiza o estado com o resultado
    fetchFunction().then((Lista) => {
      setListaDeItens(Lista)
      setLoaded(true)
    }).catch(Erro => {
      console.error(Erro)
      setLoaded(true)
    });
  }, [props.Module, props.TiposAtivos, props.Setores, props.TiposUsuarios, props.LocaisArmazenamento, props.StatusAtivos]);







  const InitEditing = () => { setEditingItem(true) }
  const EndEditing = () => { setEditingItem(false) }



  const HandleSubmiChangeItemName = (e, index, ID) => {
    e.preventDefault();
    var ItensCopy = [...ListaDeItens];
    ItensCopy[index].Value = document.getElementById(ID).value;

    const saveFunction = saveFunctions[props.Module];
    if (saveFunction) {
      saveFunction(ItensCopy).then(() => {
        setListaDeItens([...ItensCopy]);
        EndEditing();
        GetNotificationSuccessMessageChangeName(props.Module);
      });
    }
  };

  const HandleSubmiAddItem = (e) => {
    e.preventDefault()
    const Find = ListaDeItens.find(Item => Item.Value.toLocaleLowerCase() === NewItemList.toLocaleLowerCase())

    if (!Find && NewItemList) {
      var ItensCopy = [...ListaDeItens]
      const NewItem = { ...DefaultItemType, Id: v4(), Value: NewItemList }
      ItensCopy.push(NewItem)

      //Chama a função de salvamento correta usando o objeto saveFunctions
      const saveFunction = saveFunctions[props.Module];
      if (saveFunction) {
        saveFunction(ItensCopy).then(() => {
          setListaDeItens([...ItensCopy])
          GetNotificationSuccessMessageAdd(props.Module)
          setNewItemList('')
        });
      }

    } else {
      GetNotificationExistsMessageAdd(props.Module)
    }
    setNewItemList('')
  }


  const HandleDeleteItem = (Index, Id) => {
    var ItensCopy = [...ListaDeItens]
    ItensCopy.splice(Index, 1)

    var Associated

    if (props.Module === "TiposAtivos")
      Associated = props.Ativos.find(Ativo => Ativo.Type.Id === Id)
    else if (props.Module === "Setores")
      Associated = props.Usuarios.find(User => User.Sector.Id === Id)
    else if (props.Module === "TiposUsuarios")
      Associated = props.Usuarios.find(User => User.Type.Id === Id)
    else if (props.Module === "Locais")
      Associated = props.Ativos.find(Ativo => Ativo.StorageLocation.Id === Id)
    else if (props.Module === "StatusAtivos")
      Associated = props.Ativos.find(Ativo => Ativo.Status.Id === Id)
    else if (props.Module === "TiposUso")
      Associated = props.Ativos.find(Ativo => Ativo.Usage.Id === Id)

    const saveFunction = saveFunctions[props.Module]

    if (Associated) {
      GetNotificationErrorMessageDelete(props.Module)
    } else {
      saveFunction(ItensCopy).then(() => {
        setListaDeItens([...ItensCopy])
        GetNotificationSuccessMessageDelete(props.Module)
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
    const saveFunction = saveFunctions[props.Module]
    saveFunction(copiedItems).then(() => {
      setListaDeItens([...copiedItems])
    })
  }



  const HandleSubmiChangePermit = (index) => {
    var ItensCopy = [...ListaDeItens]
    ItensCopy[index].IsAdmin = !ItensCopy[index].IsAdmin
    SaveUserTipos(ItensCopy).then(() => {
      setListaDeItens([...ItensCopy])
      EndEditing()
      NotificationSucesso('Alteração', 'Permissões alteradas com sucesso!')
    })
  }






  return (
    <div>
      <div className='CustomGroupList'>

        {ListaDeItens.length === 0 && !Loaded && <Loading />}


        {(ListaDeItens.length !== 0 || Loaded) &&

          <ListGroup as="ul">
            <ListGroup.Item as="li" className='CustomGroupListTitle' >
              <span className='CustomGroupListTitleIcon'> {CustomListIcon[props.Module]} {props.Title} </span>
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
                                <ListGroup.Item key={Item.Value + v4()} action as="li">
                                  <div className='CustomGroupListTitleRow'>
                                    {props.Module === "TiposUsuarios" && <Tooltip title="Permissões de Administrador" position="bottom" >
                                      <label class="containerCheck">
                                        <input checked={Item.IsAdmin} onChange={e => HandleSubmiChangePermit(index)} type="checkbox"></input>
                                        <div class="checkmark"></div>
                                      </label>
                                    </Tooltip>
                                    }
                                    <span className='CustomGroupListItem' onClick={e => { setItemListSelected(Item.Value); }}>

                                      {EditingItem && ItemListSelected !== Item.Value && <span onClick={e => { setEditingItem(false); }}> {Item.Value}</span>}

                                      {!EditingItem && <span onDoubleClick={e => InitEditing(Item.Value)}> {Item.Value}</span>}

                                      {ItemListSelected === Item.Value && EditingItem &&
                                        <form onSubmit={e => HandleSubmiChangeItemName(e, index, Item.Value)}>
                                          <input maxLength={50} className='CustomGroupListInput' defaultValue={Item.Value} id={Item.Value} type="text" />
                                        </form>
                                      }

                                      {ItemListSelected === Item.Value && !EditingItem &&

                                        <Tooltip title="Editar Item" position="bottom" >
                                          <button onClick={e => InitEditing(Item.Value)}>
                                            <UilPen className='EditableCustomListIcon' />
                                          </button>
                                        </Tooltip>
                                      }

                                      {ItemListSelected === Item.Value && EditingItem &&
                                        <Tooltip title="Cancelar" position="bottom" >
                                          <button onClick={e => EndEditing()}>
                                            <UilBackspace className='EditableCustomListIcon' />
                                          </button>
                                        </Tooltip>
                                      }
                                      {ItemListSelected === Item.Value &&
                                        <Tooltip title="Excluir Item" position="bottom" >
                                          <button onClick={e => HandleDeleteItem(index, Item.Id)}>
                                            <UilTrashAlt lete className='EditableCustomListIcon' />
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
                    <button className='EditableCustomListAddButton'>
                      <UilPlus className='EditableCustomListIcon' />
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



const ConnectedEditableCustomList = connect((state) => {
  return {
    TiposAtivos: state.TiposAtivos,
    TiposUsuarios: state.TiposUsuarios,
    Ativos: state.Ativos,
    Setores: state.Setores,
    LocaisArmazenamento: state.LocaisArmazenamento,
    Usuarios: state.Usuarios,
    StatusAtivos: state.StatusAtivos,
  }
})(EditableCustomList)

export default ConnectedEditableCustomList