import React, { useState, useEffect } from 'react'
import { GetSetores } from '../../EditableCustomList/EditableCustomListUtils'
import { GetUsersTypes } from '../UsersListUtils'
import './User.css'
import { UserModal } from './UserModal'
import { UilEnvelope, UilUser } from '@iconscout/react-unicons'

export default function User(props) {


    const [UserType, setUserType] = useState({})
    const [UserSetor, setUserSetor] = useState({})
    const [modalShow, setModalShow] = useState(false);

    const [Setores, setSetores] = useState([])
    const [TiposUsuarios, setTiposUsuarios] = useState([])

    useEffect(() => {
        GetUsersTypes().then((Lista) => {
            setTiposUsuarios([...Lista])
            setUserType(Lista.find(U => U.Id === props.User.Type.Id))
        }).catch(Erro => {
            console.error(Erro)
        })
    }, [props.User.Type.Id])


    useEffect(() => {
        GetSetores().then((Lista) => {
            setSetores([...Lista])
            setUserSetor({ ...Lista.find(U => U.Id === props.User.Sector.Id) })
        }).catch(Erro => {
            console.error(Erro)
        })
    }, [props.User.Sector.Id])





    return (
        <>

            <UserModal Setores={Setores} TiposUsuarios={TiposUsuarios} User={props.User} UserType={UserType} UserSetor={UserSetor} show={modalShow} onHide={() => setModalShow(false)} />


            <div className='UserContainer' onClick={() => setModalShow(true)}>

                <span className='UserContainerColumn'>
                    <span className='NameColumn'>
                        <UilUser />
                        {props.User.Name}
                    </span>
                </span>
                <span className='UserContainerColumn'>
                    <span className='EmailColumn'>
                        <UilEnvelope />
                        {props.User.Email.charAt(0).toUpperCase() + props.User.Email.slice(1)}
                    </span>
                </span>
                <div className='UserContainerColumn'>
                    <span className='SetorColumn'>
                        {UserSetor.Value}
                    </span>
                </div>
                <span className='UserContainerColumn'>
                    <span className='TypeColumn'>
                        {UserType.Value}
                    </span>
                </span>
            </div>
        </>



    )
}
