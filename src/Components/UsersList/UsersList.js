import React, { useState, useEffect } from 'react'
import './UsersList.css'
import { UserModal } from './User/UserModal'
import Loading from '../LoadingForTabs/Loading';
import User from './User/User';
import { connect } from 'react-redux'
import { v4 } from 'uuid';
import { MdFilterList } from 'react-icons/md';
import Dropdown from 'react-bootstrap/Dropdown';
import { UilExclamationCircle } from '@iconscout/react-unicons'
import { GetSetoresSelect, GetUsers, GetUsersTypesSelect } from '../../Functions/Middleware';



const UsersList = (props) => {

    const [SelectedUser, setSelectedUser] = useState({})
    const [ListaDeUsuarios, setListaDeUsuarios] = useState([])
    const [SetoresOptions, setSetoresOptions] = useState([])
    const [SetorLabel, setSetorLabel] = useState('')
    const [TypeLabel, setTypeLabel] = useState('')
    const [UserTypesOptions, setUserTypesOptions] = useState([])
    const [Loaded, setLoaded] = useState(false);
    const [FiltroDeTexto, setFiltroDeTexto] = useState('');
    const [FiltroSetor, setFiltroSetor] = useState('Todos');
    const [FiltroTipo, setFiltroTipo] = useState('Todos');

    const [modalShow, setModalShow] = useState(false);




    useEffect(() => {
        GetUsersTypesSelect().then(Options => {
            setUserTypesOptions(Options)
        })

        GetSetoresSelect().then(Options => {
            setSetoresOptions(Options)
        })
    }, [])


    useEffect(() => {
        GetUsers().then((Lista) => {
            setListaDeUsuarios(Lista)
            setLoaded(true)
        }).catch(Erro => {
            console.error(Erro)
            setLoaded(true)
        })
    }, [props.Usuarios])


    useEffect(() => {
        GetUsers().then((Lista) => {
            setListaDeUsuarios(Lista.filter(Usuario => {
                const TextFilter = FiltroDeTexto === '' || (Usuario.Name.toLowerCase().includes(FiltroDeTexto.toLowerCase()) || Usuario.Email.toLowerCase().includes(FiltroDeTexto.toLowerCase()))
                const SetorFilter = FiltroSetor === 'Todos' || FiltroSetor === '' || Usuario.Sector.Id === FiltroSetor
                const TipoFilter = FiltroTipo === 'Todos' || FiltroTipo === '' || Usuario.Type.Id === FiltroTipo
                return TextFilter && SetorFilter && TipoFilter
            }))
        }).catch(Erro => {
            console.error(Erro)
            setLoaded(true)
        })
    }, [FiltroDeTexto, FiltroSetor, FiltroTipo])



    const handleSetorOptionChange = (Setor) => {
        setFiltroSetor(Setor.value)
        setSetorLabel(Setor.label)
    }

    const handleTypeOptionChange = (Type) => {
        setFiltroTipo(Type.value)
        setTypeLabel(Type.label)
    }

    const handleResetFiltros = () => {
        setFiltroDeTexto('')
        setFiltroSetor('')
        setFiltroTipo('')
    }


    const handleUserClick = (UserClicked) => {
        console.log("CLICKsa")
        setModalShow(true);
        setSelectedUser({ ...UserClicked });
    }

    return (
        <div className='UsersListContainer'>

            <UserModal User={SelectedUser} show={modalShow} onHide={() => setModalShow(false)} />

            <div className='UsersLisFormFilter'>
                <input value={FiltroDeTexto} placeholder='Procurar Usuário...' onChange={e => setFiltroDeTexto(e.target.value)}></input>
                <Dropdown autoClose="outside">
                    <Dropdown.Toggle id="Filtros">
                        <div className='FiltrosTitle'>
                            Filtros
                            <MdFilterList />
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                        <Dropdown.Item id='FiltrosItem'>

                            <Dropdown>
                                <Dropdown.Toggle id="FiltroDeSetor">
                                    <div className='FiltroDeSetorTitle'>
                                        {(FiltroSetor !== 'Todos' && FiltroSetor) ? SetorLabel : 'Filtro de Setor'}
                                        <MdFilterList />
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {SetoresOptions.map(Setor => {
                                        return <Dropdown.Item onClick={e => handleSetorOptionChange(Setor)} >{Setor.label}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>



                            <Dropdown>
                                <Dropdown.Toggle id="FiltroDeTipo">
                                    <div className='FiltroDeTipoTitle'>
                                        {(FiltroTipo !== 'Todos' && FiltroTipo) ? TypeLabel : 'Tipo de Usuário'}
                                        <MdFilterList />
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {UserTypesOptions.map(Type => {
                                        return <Dropdown.Item onClick={e => handleTypeOptionChange(Type)} >{Type.label}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>


                        </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>









                <button onClick={handleResetFiltros}>Limpar Filtro</button>
            </div>





            {(ListaDeUsuarios.length !== 0 || Loaded) && ListaDeUsuarios.map((Item, Index) => {
                return <div onClick={e => handleUserClick(Item)}>
                    <User User={Item} key={v4()} />
                </div>
            })}

            {ListaDeUsuarios.length === 0 && !Loaded && <Loading />}

            {ListaDeUsuarios.length === 0 && Loaded && <div className='FilterNoResultsContainer'>
                <UilExclamationCircle />
                <h3>Nenhum Usuário encontrado</h3>
            </div>}

        </div>
    )
}



const ConnectedUsersList = connect((state) => {
    return {
        Usuarios: state.Usuarios
    }
})(UsersList)

export default ConnectedUsersList