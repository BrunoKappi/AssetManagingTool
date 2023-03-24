import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react'
import './UserModal.css'
import UserPhoto from '../../../Images/SerranoLogoFuncoBranco.jpg'
import { UilTimes } from '@iconscout/react-unicons'
import { UilUserCircle, UilClipboardNotes, UilEnvelope, UilPhone, UilMap, UilMapMarker, UilPen, UilPuzzlePiece, UilListUl, UilSave } from '@iconscout/react-unicons'
import { GetSetores, GetUserTipos } from '../../../Functions/Middleware'
import { DefaultUser } from '../../../Data/User';
import { DefaultSetor, DefaultUserType } from '../../../Data/Items';

export const UserModal = (props) => {

    const [Tab, setTab] = useState('UserInfo')

    const [UserType, setUserType] = useState({ ...DefaultUserType })
    const [User, setUser] = useState({ ...DefaultUser })
    const [UserSetor, setUserSetor] = useState({ ...DefaultSetor })
    const [Setores, setSetores] = useState([])
    const [TiposUsuarios, setTiposUsuarios] = useState([])


    useEffect(() => {
        if (props.User.Name)
            setUser({ ...props.User })       
    }, [props.User])
 

    useEffect(() => {
        GetUserTipos().then((Lista) => {
            setTiposUsuarios([...Lista])
            if (User.Name !== '')
                setUserType(Lista.find(U => U.Id === User.Type.Id))
        }).catch(Erro => {
            console.error(Erro)
        })
    }, [User])


    useEffect(() => {
        GetSetores().then((Lista) => {
            setSetores([...Lista])
            if (User.Name !== '')
                setUserSetor({ ...Lista.find(U => U.Id === User.Sector.Id) })
        }).catch(Erro => {
            console.error(Erro)
        })
    }, [User])


    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered fullscreen={'md-down'}>

            <Modal.Body closeButton>

                <div className='UserModal'>
                    <div className='UserModalHeader'>
                        <div className='UserModalHeader-Left'>
                            <div className='UserModalHeader-Left-Photo'>
                                <img src={UserPhoto} alt="User" />
                            </div>
                        </div>
                        <div className='UserModalHeader-Right'>
                            <div className='UserModalHeader-Right-Name'>
                                {User.Name + ' ' + User.LastName}
                                <UilTimes className='UserModalHeader-Right-Close' onClick={props.onHide} />
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

                                    <h4 className='UserModalBody-UserInfoForm-SectionTitle'>Dados Cadastrais</h4>

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
                                            <input value={User.Name} type="text" />
                                        </div>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Sobrenome
                                            </span>
                                            <input value={User.LastName} type="text" />
                                        </div>
                                    </div>

                                    <div className='UserModalBody-UserInfoForm-OneLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPhone />
                                                Telefone
                                            </span>
                                            <input value={User.Phone} type="text" />
                                        </div>
                                    </div>


                                    <div className='UserModalBody-UserInfoForm-TwoLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilMap />
                                                Estado
                                            </span>
                                            <input value={User.Estate} type="text" />
                                        </div>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilMapMarker />
                                                Cidade
                                            </span>
                                            <input value={User.City} type="text" />
                                        </div>
                                    </div>

                                    <h4 className='UserModalBody-UserInfoForm-SectionTitle'>Na Empresa</h4>

                                    <div className='UserModalBody-UserInfoForm-TwoLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>

                                            <div className='UserModalBody-UserInfoForm-SetorList'>
                                                <div className='UserModalBody-UserInfoForm-SetorList-Title'>
                                                    <UilPuzzlePiece />
                                                    Setor
                                                </div>
                                                <div className='UserModalBody-UserInfoForm-SetorList-Itens'>
                                                    {Setores.map(Setor => {
                                                        return <div className={'UserModalBody-UserInfoForm-SetorList-Item' + (User.Sector.Id === Setor.Id ? ' UserModalBody-UserInfoForm-SetorList-ItemActive' : '')}>
                                                            {Setor.Value}
                                                        </div>
                                                    })}
                                                </div>
                                            </div>

                                        </div>

                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <div className='UserModalBody-UserInfoForm-TiposUserList'>
                                                <div className='UserModalBody-UserInfoForm-TiposUserList-Title'>
                                                    <UilListUl />
                                                    Tipos de Usuario
                                                </div>
                                                <div className='UserModalBody-UserInfoForm-TiposUserList-Itens'>
                                                    {TiposUsuarios.map(TipoUser => {
                                                        return <div className={'UserModalBody-UserInfoForm-TiposUserList-Item' + (User.Type.Id === TipoUser.Id ? ' UserModalBody-UserInfoForm-TiposUserList-ItemActive' : '')}>
                                                            {TipoUser.Value}
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='UserModalBody-UserInfoForm-Button'>
                                        <button>
                                            <UilSave />
                                            Salvar
                                        </button>
                                    </div>



                                </form>
                            </div>}
                        </div>
                    </div>
                </div>


            </Modal.Body>

        </Modal>
    );
}