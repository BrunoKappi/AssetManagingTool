import Modal from 'react-bootstrap/Modal';
import './UserModal.css'
import User from '../../../Images/SerranoLogoFuncoBranco.jpg'
import { UilTimes } from '@iconscout/react-unicons'
import { UilUserCircle, UilClipboardNotes, UilEnvelope, UilPhone, UilMap, UilMapMarker, UilPen } from '@iconscout/react-unicons'
import { useState } from 'react';

export const UserModal = (props) => {
 
    const [Tab, setTab] = useState('UserInfo')

    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered fullscreen={'md-down'}>

            <Modal.Body closeButton>

                <div className='UserModal'>
                    <div className='UserModalHeader'>
                        <div className='UserModalHeader-Left'>
                            <div className='UserModalHeader-Left-Photo'>
                                <img src={User} alt="User" />
                            </div>
                        </div>
                        <div className='UserModalHeader-Right'>
                            <div className='UserModalHeader-Right-Name'>
                                {props.User.Name}
                                <UilTimes className='UserModalHeader-Right-Close' onClick={props.onHide}/>
                            </div>
                            <div className='UserModalHeader-Right-Setor'>
                                {props.UserSetor.Value}
                            </div>
                            <div className='UserModalHeader-Right-Tipo'>
                                {props.UserType.Value}
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
                                            <input value={props.User.Email} type="text" />
                                        </div>
                                    </div>


                                    <div className='UserModalBody-UserInfoForm-TwoLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Nome
                                            </span>
                                            <input value={props.User.Name.split(' ')[0]} type="text" />
                                        </div>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Sobrenome
                                            </span>
                                            <input value={props.User.Name.split(' ').slice(1).join(" ")} type="text" />
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


            </Modal.Body>

        </Modal>
    );
}