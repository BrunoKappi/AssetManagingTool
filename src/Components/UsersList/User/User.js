import React, { useState, useEffect } from 'react'
import { GetSetores } from '../../EditableCustomList/EditableCustomListUtils'
import { GetUsersTypes } from '../UsersListUtils'
import './User.css'
import UserPhoto from '../../../Images/SerranoLogo2.png'


export default function User(props) {

    const [UserType, setUserType] = useState({})
    const [UserSetor, setUserSetor] = useState({})

    useEffect(() => {
        GetUsersTypes().then((Lista) => {
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
        <div className='UserContainer'> 
            <div className='UserContainerColumn'>
                <img alt='User Logo' src={UserPhoto}></img>
            </div>
            <span className='UserContainerColumn'>
                <span className='NameColumn'> {props.User.Name}</span>
            </span>
            <span className='UserContainerColumn'>
                <span className='EmailColumn'> {props.User.Email}</span>
            </span>
            <div className='UserContainerColumn'>
                <span className='SetorColumn'>{UserSetor.Value}</span>
            </div>
            <span className='UserContainerColumn'>
                <span className='TypeColumn'>{UserType.Value}</span>
            </span>
        </div>
    )
}
