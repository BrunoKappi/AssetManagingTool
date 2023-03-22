import React, { useState, useEffect } from 'react'
import './UsersList.css'
import { GetUsers } from './UsersListUtils';
import Loading from '../LoadingForTabs/Loading';
import User from './User/User';
import { connect } from 'react-redux'
import { v4 } from 'uuid';
import TableHeader from './TableHeader/TableHeader';


const UsersList = (props) => {

    const [ListaDeUsuarios, setListaDeUsuarios] = useState([])
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        GetUsers().then((Lista) => {
            setListaDeUsuarios(Lista)
            setLoaded(true)
        }).catch(Erro => {
            console.error(Erro)
            setLoaded(true)
        })
    }, [props.Usuarios])


    return (
        <div className='UsersListContainer'>

            <TableHeader />

            {(ListaDeUsuarios.length !== 0 || Loaded) && ListaDeUsuarios.map((Item, Index) => {
                return <User User={Item} key={v4()} />
            })}

            {ListaDeUsuarios.length === 0 && !Loaded &&
                <Loading />
            }
        </div>
    )
}



const ConnectedUsersList = connect((state) => {
    return {
        Usuarios: state.Usuarios
    }
})(UsersList)

export default ConnectedUsersList