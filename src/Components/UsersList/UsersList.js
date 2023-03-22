import React, { useState, useEffect } from 'react'
import './UsersList.css'
import { GetSetoresSelect, GetUsers, GetUsersTypesSelect } from './UsersListUtils';
import Loading from '../LoadingForTabs/Loading';
import User from './User/User';
import { connect } from 'react-redux'
import { v4 } from 'uuid';
import TableHeader from './TableHeader/TableHeader';
import { FaFilter } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';
import Dropdown from 'react-bootstrap/Dropdown';
import { Tooltip } from 'react-tippy';



const UsersList = (props) => {

    const [ListaDeUsuarios, setListaDeUsuarios] = useState([])
    const [SetoresOptions, setSetoresOptions] = useState([])
    const [SetorLabel, setSetorLabel] = useState('')
    const [TypeLabel, setTypeLabel] = useState('')
    const [UserTypesOptions, setUserTypesOptions] = useState([])
    const [Loaded, setLoaded] = useState(false);
    const [FiltroDeTexto, setFiltroDeTexto] = useState('');
    const [FiltroSetor, setFiltroSetor] = useState('Todos');
    const [FiltroTipo, setFiltroTipo] = useState('Todos');


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
                const TextFilter = FiltroDeTexto === '' || Usuario.Name.toLowerCase().includes(FiltroDeTexto.toLowerCase())
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

    return (
        <div className='UsersListContainer'>

            <div className='UsersLisFormFilter'>
                <span> <FaFilter />Filtros</span>
                <input value={FiltroDeTexto} placeholder='Procurar Usuário' onChange={e => setFiltroDeTexto(e.target.value)}></input>


                <Tooltip title="Filtrar Usuários por Setor" position="bottom" >
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
                </Tooltip>

                <Tooltip title="Filtrar Usuários por Tipo" position="bottom" >
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
                </Tooltip>



                <button onClick={handleResetFiltros}>Limpar Filtro</button>
            </div>


            <TableHeader />



            {(ListaDeUsuarios.length !== 0 || Loaded) && ListaDeUsuarios.map((Item, Index) => {
                return <User User={Item} key={v4()} />
            })}

            {ListaDeUsuarios.length === 0 && !Loaded && <Loading />}

            {ListaDeUsuarios.length === 0 && Loaded && <h2>Nenhum Usuário encontrado</h2>}

        </div>
    )
}



const ConnectedUsersList = connect((state) => {
    return {
        Usuarios: state.Usuarios
    }
})(UsersList)

export default ConnectedUsersList