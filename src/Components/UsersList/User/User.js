import React, { useState, useEffect } from 'react'
import './User.css'
import { UilEnvelope, UilUser } from '@iconscout/react-unicons'
import { GetSetores, GetUserTipos } from '../../../Functions/Middleware'

export default function User(props) {


    const [UserType, setUserType] = useState({})
    const [UserSetor, setUserSetor] = useState({})

    useEffect(() => {
        GetUserTipos().then((Lista) => {
            setUserType(Lista.find(U => U.Id === props.User.Type.Id))
        }).catch(Erro => {
            console.error(Erro)
        })
    }, [props.User.Type.Id])


    useEffect(() => {
        GetSetores().then((Lista) => {
            setUserSetor({ ...Lista.find(U => U.Id === props.User.Sector.Id) })
        }).catch(Erro => {
            console.error(Erro)
        })
    }, [props.User.Sector.Id])





    return (
        <>

            <div className='UserContainer' >

                <span className='UserContainerColumn'>
                    <span className='NameColumn'>
                        <UilUser />
                        {props.User.Name + ' ' + props.User.LastName}
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
