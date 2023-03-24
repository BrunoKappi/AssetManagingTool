import React, { useState, useEffect } from 'react'
import './Profile.css'
import { connect } from 'react-redux'
import { Users } from '../../Data/User'

import UserPhoto from '../../Images/SerranoLogoFuncoBranco.jpg'
import { UilTimes } from '@iconscout/react-unicons'
import { UilUserCircle, UilClipboardNotes, UilEnvelope, UilPhone, UilMap, UilMapMarker, UilPen } from '@iconscout/react-unicons'
import { GetSetores, GetUserTipos } from '../../Functions/Middleware'


const Profile = (props) => {

  const [User,] = useState({ ...Users.find(user => user.Email === props.LoggedUser.Email) })
  const [Tab, setTab] = useState('UserInfo')

  const [UserType, setUserType] = useState({})
  const [UserSetor, setUserSetor] = useState({})



  useEffect(() => {
    if (User)
      GetUserTipos().then((Lista) => {
        setUserType(Lista.find(U => U.Id === User.Type.Id))       
      }).catch(Erro => {
        console.error(Erro)
      })
  }, [User])


  useEffect(() => {
    GetSetores().then((Lista) => {
      setUserSetor({ ...Lista.find(U => U.Id === User.Sector.Id) })
    }).catch(Erro => {
      console.error(Erro)
    })
  }, [User])

  return (
    <div className='ProfileContainer'>




      <div className='UserModal'>
                    <div className='UserModalHeader'>
                        <div className='UserModalHeader-Left'>
                            <div className='UserModalHeader-Left-Photo'>
                                <img src={UserPhoto} alt="User" />
                            </div>
                        </div>
                        <div className='UserModalHeader-Right'>
                            <div className='UserModalHeader-Right-Name'>
                                {User.Name}
                                <UilTimes className='UserModalHeader-Right-Close' onClick={props.onHide}/>
                            </div>
                            <div className='UserModalHeader-Right-Setor'>
                                {UserSetor.Value}
                            </div>
                            <div className='UserModalHeader-Right-Tipo'>
                                {UserType.Value}
                            </div>
                        </div>

                    </div>
                    <div className='UserModalBody'>
                        <div className='UserModalBody-Sidebar'>
                            <div className={Tab === 'UserInfo' ? 'UserModalBody-Sidebar-ActiveItem' : 'UserModalBody-Sidebar-Item'} onClick={e => setTab('UserInfo')}>
                                <UilUserCircle />
                                Informações Pessoais
                            </div>
                            <div className={Tab === 'Ativos' ? 'UserModalBody-Sidebar-ActiveItem' : 'UserModalBody-Sidebar-Item'} onClick={e => setTab('Ativos')}>
                                <UilClipboardNotes />
                                Ativos
                            </div>
                        </div>
                        <div className='UserModalBody-UserInfo'>
                            {Tab === 'UserInfo' && <div className='UserModalBody-UserInfoForm'>
                                <form>
                                    <div className='UserModalBody-UserInfoForm-OneLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilEnvelope />
                                                Email
                                            </span>
                                            <input value={User.Email} type="text" />
                                        </div>
                                    </div>


                                    <div className='UserModalBody-UserInfoForm-TwoLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Nome
                                            </span>
                                            <input value={User.Name.split(' ')[0]} type="text" />
                                        </div>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Sobrenome
                                            </span>
                                            <input value={User.Name.split(' ').slice(1).join(" ")} type="text" />
                                        </div>
                                    </div>

                                    <div className='UserModalBody-UserInfoForm-OneLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPhone />
                                                Telefone
                                            </span>
                                            <input type="text" />
                                        </div>
                                    </div>


                                    <div className='UserModalBody-UserInfoForm-TwoLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilMap />
                                                Estado
                                            </span>
                                            <input type="text" />
                                        </div>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilMapMarker />
                                                Cidade
                                            </span>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    

                                </form>
                            </div>}
                        </div>
                    </div>
                </div>


    </div>
  )
}


const ConnectedProfile = connect((state) => {
  return {
    LoggedUser: state.LoggedUser
  }
})(Profile)

export default ConnectedProfile