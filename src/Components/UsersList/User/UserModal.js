import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react'
import './UserModal.css'
import UserPhoto from '../../../Images/SerranoLogoFuncoBranco.jpg'
import { UilUserCircle, UilClipboardNotes, UilEnvelope, UilPhone, UilMap, UilMapMarker, UilPen, UilPuzzlePiece, UilListUl, UilSave, UilHistory, UilTimes, UilBuilding } from '@iconscout/react-unicons'
import { EditUser, GetSetores, GetUserTipos } from '../../../Functions/Middleware'
import { DefaultUser } from '../../../Data/User';
import { DefaultSetor, DefaultUserType } from '../../../Data/Items';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { connect } from 'react-redux'
import { NotificationAlerta, NotificationSucesso } from '../../../NotificationUtils';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { PermitIndexs } from '../../../GlobalVars'

const UserModal = (props) => {

    /////////// PAIS ESTADO CIDADE //////////   

    const noOptionsMessage = ({ inputValue }) => {
        return inputValue ? 'Nenhuma opção encontrada para "' + inputValue + '"' : 'Nenhuma opção disponível';
    };


    const UserModalSelectcustomStyles = {

        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'var(--ComplementaryColor)' : provided.backgroundColor,
            color: state.isFocused ? 'var(--PrimaryColor)' : provided.color,
            ':hover': {
                backgroundColor: 'var(--ComplementaryColor)',
                color: 'var(--PrimaryColor)'
            }
        }),
        input: (provided) => ({
            ...provided,
            border: 'none',
            outline: 'none',
            color: 'var(--UserModal-Color-Input)',
            ':placeholder': {
                color: 'var(--UserModal-Color-Input)',
            }
        }),
        control: (provided, state) => ({
            ...provided,
            borderRadius: '.5rem',
            boxShadow: state.isFocused ? 'none' : 'none',
            border: state.isFocused ? '1px solid var(--PrimaryBackGroundFaded50)' : '1px solid var(--PrimaryBackGroundFaded50)',
            backgroundColor: 'var(--UserModal-Background-Input)',
            color: 'var(--UserModal-Color-Input)'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'var(--UserModal-Color-Input)'
        }),
    };

    /////////// PAIS ESTADO CIDADE //////////

    const [Tab, setTab] = useState('UserInfo')

    const [UserType, setUserType] = useState({ ...DefaultUserType })
    const [User, setUser] = useState({ ...DefaultUser })
    const [UserSetor, setUserSetor] = useState({ ...DefaultSetor })
    const [Setores, setSetores] = useState([])
    const [TiposUsuarios, setTiposUsuarios] = useState([])

    //PERMIT
    const [IsAdmin, setIsAdmin] = useState(false)
    const [CanEdit, setCanEdit] = useState(false)



    //CURRENT USER
    const [, setCurrentUserSetor] = useState({ ...DefaultSetor })
    const [CurrentUserType, setCurrentUserType] = useState({ ...DefaultUserType })
    const [IsCurrentUser, setIsCurrentUser] = useState(false)

    //COPIAS DAS INFORMAÇÔES DO USER
    const [CopyUserName, setCopyUserName] = useState('')
    const [CopyUserLastName, setCopyUserLastName] = useState('')
    const [CopyUserPhone, setCopyUserPhone] = useState('')
    const [CopyUserCountry, setCopyUserCountry] = useState('')
    const [CopyUserEstate, setCopyUserEstate] = useState('')
    const [CopyUserCity, setCopyUserCity] = useState('')
    const [CopyUserType, setCopyUserType] = useState({})
    const [CopyUserSector, setCopyUserSector] = useState({})
    //COPIAS DAS INFORMAÇÔES DO USER

    const [IsEdited, setIsEdited] = useState(false)



    const FillCopyes = (UserCopy) => {
        setCopyUserName(UserCopy.Name)
        setCopyUserLastName(UserCopy.LastName)
        setCopyUserPhone(UserCopy.Phone)
        setCopyUserCountry(UserCopy.Country)
        setCopyUserEstate(UserCopy.Estate)
        setCopyUserCity(UserCopy.City)
        setCopyUserSector(UserCopy.Sector)
        setCopyUserType(UserCopy.Type)

    }


    const CancelEditions = () => {
        FillCopyes(User)
    }

    const HandleChangeInfo = (Info, Value) => {
        var PermitToEditUsers = false
        if (CurrentUserType?.Permits)
            PermitToEditUsers = CurrentUserType?.Permits[PermitIndexs['EDITAR_USUARIOS']]


        if (CanEdit) {
            if (Info === 'Name')
                setCopyUserName(Value)
            else if (Info === 'LastName')
                setCopyUserLastName(Value)
            else if (Info === 'Phone')
                setCopyUserPhone(Value)
            else if (Info === 'Estate')
                setCopyUserEstate(Value)
            else if (Info === 'Country')
                setCopyUserCountry(Value)
            else if (Info === 'City')
                setCopyUserCity(Value)
        }
        if ((CanEdit || IsAdmin) || PermitToEditUsers) {
            if (Info === 'Sector')
                setCopyUserSector({ Id: Value })
            else if (Info === 'Type')
                setCopyUserType({ Id: Value })
        }
    }



    useEffect(() => {
        // QUANDO TEM USER
        if (props.User.Name) {
            setCanEdit(false)
            setUser({ ...props.User })
            FillCopyes(props.User)
            setIsEdited(false)
            setTab('UserInfo')
            setIsCurrentUser(props.User.Id === props.CurrentUser.Id)

        }
    }, [props.User, props.CurrentUser])


    useEffect(() => {
        if (CurrentUserType.IsAdmin) {
            setIsAdmin(true)
        } else
            setIsAdmin(false)

        var PermitToEditUsers = false
        if (CurrentUserType?.Permits)
            PermitToEditUsers = CurrentUserType?.Permits[PermitIndexs['EDITAR_USUARIOS']]

        //CAN EDIT
        if (IsCurrentUser || CurrentUserType.IsAdmin || PermitToEditUsers)
            setCanEdit(true)

    }, [CurrentUserType, IsCurrentUser])



    useEffect(() => {
        GetUserTipos().then((Lista) => {
            setTiposUsuarios([...Lista])
            if (User.Name !== '') {
                setUserType(Lista.find(U => U.Id === User.Type.Id))
                setCurrentUserType(Lista.find(U => U.Id === props.CurrentUser.Type.Id))

            }
        }).catch(Erro => {
            console.error(Erro)
        })

        GetSetores().then((Lista) => {
            setSetores([...Lista])
            if (User.Name !== '') {
                setUserSetor({ ...Lista.find(U => U.Id === User.Sector.Id) })
                setCurrentUserSetor({ ...Lista.find(U => U.Id === props.CurrentUser.Sector.Id) })
            }
        }).catch(Erro => {
            console.error(Erro)
        })
    }, [User, props.CurrentUser])



    useEffect(() => {
        if (CopyUserName !== User.Name || CopyUserLastName !== User.LastName || CopyUserPhone !== User.Phone || CopyUserEstate.name !== User.Estate.name || CopyUserCity.name !== User.City.name || CopyUserCountry.name !== User.Country.name || CopyUserSector.Id !== User.Sector.Id || CopyUserType.Id !== User.Type.Id) {
            setIsEdited(true)
        } else {
            setIsEdited(false)
        }
    }, [CopyUserName, CopyUserLastName, CopyUserPhone, CopyUserEstate, CopyUserCity, CopyUserCountry, CopyUserSector, CopyUserType, User])


    const SaveEdit = (e) => {
        e.preventDefault()

        if (CanEdit) {

            if (CopyUserPhone.length < 12 && CopyUserPhone.length > 0) {
                NotificationAlerta('Preenchimento inválido', 'O Telefone de ter um mínimo 12 digitos')
            } else if (CopyUserPhone.length === 0) {
                NotificationAlerta('Preenchimento inválido', 'O telefone não pode ser vazio')
            } else if (CopyUserName.length === 0) {
                NotificationAlerta('Preenchimento inválido', 'O nome não pode ser vazio')
            } else if (CopyUserLastName.length === 0) {
                NotificationAlerta('Preenchimento inválido', 'O sobrenome não pode ser vazio')
            } else if (!CopyUserEstate.name) {
                NotificationAlerta('Preenchimento inválido', 'O Estado não pode ser vazio')
            } else if (!CopyUserCity.name) {
                NotificationAlerta('Preenchimento inválido', 'A Cidade não pode ser vazia')
            } else if (!CopyUserCountry.name) {
                NotificationAlerta('Preenchimento inválido', 'O País não pode ser vazio')
            } else {
                const EditedUser = { ...User }

                EditedUser.Name = CopyUserName
                EditedUser.LastName = CopyUserLastName
                EditedUser.Phone = CopyUserPhone
                EditedUser.Estate = CopyUserEstate
                EditedUser.City = CopyUserCity
                EditedUser.Country = CopyUserCountry
                EditedUser.Type = CopyUserType
                EditedUser.Sector = CopyUserSector




                setUser({ ...EditedUser })
                EditUser(EditedUser).then(() => { NotificationSucesso('Alteração', 'Alterações salvas com sucesso!') })
            }



        }
    }



    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered fullscreen={'md-down'} className={localStorage.getItem('AssetSenseTema') === 'Escuro' ? 'UserModal-ModalEscuro UserModal-Modal' : 'UserModal-ModalClaro UserModal-Modal'}>

            <Modal.Body closeButton className="UserModal-Body">

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
                            <div className={Tab === 'Atividade' ? 'UserModalBody-Sidebar-ActiveItem' : 'UserModalBody-Sidebar-Item'} onClick={e => setTab('Atividade')}>
                                <UilHistory />
                                Atividade
                            </div>
                        </div>
                        <div className='UserModalBody-UserInfo'>
                            {Tab === 'UserInfo' && <div className='UserModalBody-UserInfoForm'>
                                <form onSubmit={SaveEdit}>

                                    <h4 className='UserModalBody-UserInfoForm-SectionTitle'>Dados Cadastrais</h4>


                                    <div className='UserModalBody-UserInfoForm-OneLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilEnvelope />
                                                Email
                                            </span>
                                            <input value={User.Email} type="text" placeholder='Email' />
                                        </div>
                                    </div>


                                    <div className='UserModalBody-UserInfoForm-TwoLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Nome
                                            </span>
                                            <input disabled={!CanEdit} value={CopyUserName} type="text" onChange={e => HandleChangeInfo('Name', e.target.value)} />
                                        </div>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Sobrenome
                                            </span>
                                            <input disabled={!CanEdit} value={CopyUserLastName} type="text" onChange={e => HandleChangeInfo('LastName', e.target.value)} />
                                        </div>
                                    </div>



                                    <div className='UserModalBody-UserInfoForm-OneLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPhone />
                                                Telefone
                                            </span>
                                            <PhoneInput
                                                containerClass="UserModalBody-UserInfoForm-PhoneInput-Container"
                                                inputClass="UserModalBody-UserInfoForm-PhoneInput"
                                                buttonClass="UserModalBody-UserInfoForm-PhoneInput-Button"
                                                dropdownClass="UserModalBody-UserInfoForm-PhoneInput-Dropdown"
                                                containerStyle={{ margin: '0', padding: '0', width: '100%', fontSize: '12px' }}
                                                country={'br'}
                                                value={CopyUserPhone}
                                                disabled={!CanEdit}
                                                onChange={e => HandleChangeInfo('Phone', e)}
                                            />

                                        </div>
                                    </div>




                                    <div className='UserModalBody-UserInfoForm-TwoLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilMap />
                                                País
                                            </span>
                                            <Select
                                                className='UserModalBody-UserInfoForm-LocationSelect'
                                                placeholder="Selecione o País"
                                                noOptionsMessage={noOptionsMessage}
                                                options={Country.getAllCountries()}
                                                getOptionLabel={(options) => { return options["name"]; }}
                                                getOptionValue={(options) => { return options["name"]; }}
                                                styles={UserModalSelectcustomStyles}
                                                value={CopyUserCountry}
                                                isDisabled={!CanEdit}
                                                onChange={(item) => {
                                                    setCopyUserCountry(item);;
                                                    setCopyUserEstate({ name: '' });
                                                    setCopyUserCity({ name: '' });
                                                }}
                                            />
                                        </div>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilMapMarker />
                                                Estado
                                            </span>
                                            <Select
                                                className='UserModalBody-UserInfoForm-LocationSelect'
                                                placeholder="Selecione o Estado"
                                                noOptionsMessage={noOptionsMessage}
                                                options={State?.getStatesOfCountry(CopyUserCountry?.isoCode)}
                                                getOptionLabel={(options) => { return options["name"]; }}
                                                getOptionValue={(options) => { return options["name"]; }}
                                                styles={UserModalSelectcustomStyles}
                                                isDisabled={!CanEdit}
                                                value={CopyUserEstate}
                                                onChange={(item) => {
                                                    setCopyUserEstate(item);
                                                    setCopyUserCity({ name: '' });
                                                }}
                                            />
                                        </div>
                                    </div>


                                    <div className='UserModalBody-UserInfoForm-OneLine'>
                                        <div className='UserModalBody-UserInfoForm-Group'>
                                            <span>
                                                <UilBuilding />
                                                Cidade
                                            </span>
                                            <Select
                                                className='UserModalBody-UserInfoForm-LocationSelect'
                                                placeholder="Selecione a Cidade"
                                                noOptionsMessage={noOptionsMessage}
                                                options={City.getCitiesOfState(
                                                    CopyUserEstate?.countryCode,
                                                    CopyUserEstate?.isoCode
                                                )}
                                                getOptionLabel={(options) => { return options["name"]; }}
                                                getOptionValue={(options) => { return options["name"]; }}
                                                styles={UserModalSelectcustomStyles}
                                                isDisabled={!CanEdit}
                                                value={CopyUserCity}
                                                onChange={(item) => {
                                                    setCopyUserCity(item);
                                                }}
                                                allowCreate={true}
                                            />
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
                                                        return <div className={'UserModalBody-UserInfoForm-SetorList-Item'} onClick={e => HandleChangeInfo('Sector', Setor.Id)}>
                                                            {CopyUserSector.Id === Setor.Id ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
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
                                                        return <div className={'UserModalBody-UserInfoForm-TiposUserList-Item'} onClick={e => HandleChangeInfo('Type', TipoUser.Id)}>
                                                            {CopyUserType.Id === TipoUser.Id ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                                                            {TipoUser.Value}
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className='UserModalBody-UserInfoForm-Button'>
                                    {IsEdited &&
                                        <>
                                            <button onClick={CancelEditions}>
                                                <UilTimes />
                                                Cancelar
                                            </button>
                                            <button onClick={SaveEdit}>
                                                <UilSave />
                                                Salvar
                                            </button>
                                        </>

                                    }
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>


            </Modal.Body>

        </Modal>
    );
}



const ConnectedUserModal = connect((state) => {
    return {
        LoggedUser: state.LoggedUser
    }
})(UserModal)

export default ConnectedUserModal