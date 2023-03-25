import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react'
import './ProfilePage.css'
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

const ProfilePage = (props) => {

    /////////// PAIS ESTADO CIDADE //////////   

    const noOptionsMessage = ({ inputValue }) => {
        return inputValue ? 'Nenhuma opção encontrada para "' + inputValue + '"' : 'Nenhuma opção disponível';
    };


    const ProfilePageSelectcustomStyles = {

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
            outline: 'none'
        }),
        control: (provided, state) => ({
            ...provided,
            borderRadius: '.5rem',
            boxShadow: state.isFocused ? 'none' : 'none',
            border: state.isFocused ? '1px solid var(--PrimaryBackGroundFaded50)' : '1px solid var(--PrimaryBackGroundFaded50)'
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
        if (CanEdit && IsAdmin) {
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

        //CAN EDIT
        if (IsCurrentUser || CurrentUserType.IsAdmin)
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
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered fullscreen={'md-down'}>

            <Modal.Body closeButton>

                <div className='ProfilePage'>
                    <div className='ProfilePageHeader'>
                        <div className='ProfilePageHeader-Left'>
                            <div className='ProfilePageHeader-Left-Photo'>
                                <img src={UserPhoto} alt="User" />
                            </div>
                        </div>
                        <div className='ProfilePageHeader-Right'>
                            <div className='ProfilePageHeader-Right-Name'>
                                {User.Name + ' ' + User.LastName}
                                <UilTimes className='ProfilePageHeader-Right-Close' onClick={props.onHide} />
                            </div>
                            <div className='ProfilePageHeader-Right-Setor'>
                                {UserSetor.Value}
                            </div>
                            <div className='ProfilePageHeader-Right-Tipo'>
                                {UserType.Value}
                            </div>
                        </div>

                    </div>
                    <div className='ProfilePageBody'>
                        <div className='ProfilePageBody-Sidebar'>
                            <div className={Tab === 'UserInfo' ? 'ProfilePageBody-Sidebar-ActiveItem' : 'ProfilePageBody-Sidebar-Item'} onClick={e => setTab('UserInfo')}>
                                <UilUserCircle />
                                Informações Pessoais
                            </div>
                            <div className={Tab === 'Ativos' ? 'ProfilePageBody-Sidebar-ActiveItem' : 'ProfilePageBody-Sidebar-Item'} onClick={e => setTab('Ativos')}>
                                <UilClipboardNotes />
                                Ativos
                            </div>
                            <div className={Tab === 'Atividade' ? 'ProfilePageBody-Sidebar-ActiveItem' : 'ProfilePageBody-Sidebar-Item'} onClick={e => setTab('Atividade')}>
                                <UilHistory />
                                Atividade
                            </div>
                        </div>
                        <div className='ProfilePageBody-UserInfo'>
                            {Tab === 'UserInfo' && <div className='ProfilePageBody-UserInfoForm'>
                                <form onSubmit={SaveEdit}>

                                    <h4 className='ProfilePageBody-UserInfoForm-SectionTitle'>Dados Cadastrais</h4>

                                   

                                    <div className='ProfilePageBody-UserInfoForm-OneLine'>
                                        <div className='ProfilePageBody-UserInfoForm-Group'>
                                            <span>
                                                <UilEnvelope />
                                                Email
                                            </span>
                                            <input value={User.Email} type="text" placeholder='Email' />
                                        </div>
                                    </div>


                                    <div className='ProfilePageBody-UserInfoForm-TwoLine'>
                                        <div className='ProfilePageBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Nome
                                            </span>
                                            <input disabled={!CanEdit} value={CopyUserName} type="text" onChange={e => HandleChangeInfo('Name', e.target.value)} />
                                        </div>
                                        <div className='ProfilePageBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPen />
                                                Sobrenome
                                            </span>
                                            <input disabled={!CanEdit} value={CopyUserLastName} type="text" onChange={e => HandleChangeInfo('LastName', e.target.value)} />
                                        </div>
                                    </div>



                                    <div className='ProfilePageBody-UserInfoForm-OneLine'>
                                        <div className='ProfilePageBody-UserInfoForm-Group'>
                                            <span>
                                                <UilPhone />
                                                Telefone
                                            </span>
                                            <PhoneInput
                                                containerClass="ProfilePageBody-UserInfoForm-PhoneInput-Container"
                                                inputClass="ProfilePageBody-UserInfoForm-PhoneInput"
                                                buttonClass="ProfilePageBody-UserInfoForm-PhoneInput-Button"
                                                dropdownClass="ProfilePageBody-UserInfoForm-PhoneInput-Dropdown"
                                                containerStyle={{ margin: '0', padding: '0', width: '100%', fontSize: '12px' }}
                                                country={'br'}
                                                value={CopyUserPhone}
                                                disabled={!CanEdit}
                                                onChange={e => HandleChangeInfo('Phone', e)}
                                            />

                                        </div>
                                    </div>




                                    <div className='ProfilePageBody-UserInfoForm-TwoLine'>
                                        <div className='ProfilePageBody-UserInfoForm-Group'>
                                            <span>
                                                <UilMap />
                                                País
                                            </span>
                                            <Select
                                                className='ProfilePageBody-UserInfoForm-LocationSelect'
                                                placeholder="Selecione o País"
                                                noOptionsMessage={noOptionsMessage}
                                                options={Country.getAllCountries()}
                                                getOptionLabel={(options) => { return options["name"]; }}
                                                getOptionValue={(options) => { return options["name"]; }}
                                                styles={ProfilePageSelectcustomStyles}
                                                value={CopyUserCountry}
                                                isDisabled={!CanEdit}
                                                onChange={(item) => {
                                                    setCopyUserCountry(item);;
                                                    setCopyUserEstate({ name: '' });
                                                    setCopyUserCity({ name: '' });
                                                }}
                                            />
                                        </div>
                                        <div className='ProfilePageBody-UserInfoForm-Group'>
                                            <span>
                                                <UilMapMarker />
                                                Estado
                                            </span>
                                            <Select
                                                className='ProfilePageBody-UserInfoForm-LocationSelect'
                                                placeholder="Selecione o Estado"
                                                noOptionsMessage={noOptionsMessage}
                                                options={State?.getStatesOfCountry(CopyUserCountry?.isoCode)}
                                                getOptionLabel={(options) => { return options["name"]; }}
                                                getOptionValue={(options) => { return options["name"]; }}
                                                styles={ProfilePageSelectcustomStyles}
                                                isDisabled={!CanEdit}
                                                value={CopyUserEstate}
                                                onChange={(item) => {
                                                    setCopyUserEstate(item);
                                                    setCopyUserCity({ name: '' });
                                                }}
                                            />
                                        </div>
                                    </div>


                                    <div className='ProfilePageBody-UserInfoForm-OneLine'>
                                        <div className='ProfilePageBody-UserInfoForm-Group'>
                                            <span>
                                                <UilBuilding />
                                                Cidade
                                            </span>
                                            <Select
                                                className='ProfilePageBody-UserInfoForm-LocationSelect'
                                                placeholder="Selecione a Cidade"
                                                noOptionsMessage={noOptionsMessage}
                                                options={City.getCitiesOfState(
                                                    CopyUserEstate?.countryCode,
                                                    CopyUserEstate?.isoCode
                                                )}
                                                getOptionLabel={(options) => { return options["name"]; }}
                                                getOptionValue={(options) => { return options["name"]; }}
                                                styles={ProfilePageSelectcustomStyles}
                                                isDisabled={!CanEdit}
                                                value={CopyUserCity}
                                                onChange={(item) => {
                                                    setCopyUserCity(item);
                                                }}
                                                allowCreate={true}
                                            />
                                        </div>
                                    </div>












                                    <h4 className='ProfilePageBody-UserInfoForm-SectionTitle'>Na Empresa</h4>

                                    <div className='ProfilePageBody-UserInfoForm-TwoLine'>
                                        <div className='ProfilePageBody-UserInfoForm-Group'>

                                            <div className='ProfilePageBody-UserInfoForm-SetorList'>
                                                <div className='ProfilePageBody-UserInfoForm-SetorList-Title'>
                                                    <UilPuzzlePiece />
                                                    Setor
                                                </div>
                                                <div className='ProfilePageBody-UserInfoForm-SetorList-Itens'>
                                                    {Setores.map(Setor => {
                                                        return <div className={'ProfilePageBody-UserInfoForm-SetorList-Item'} onClick={e => HandleChangeInfo('Sector', Setor.Id)}>
                                                            {CopyUserSector.Id === Setor.Id ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                                                            {Setor.Value}
                                                        </div>
                                                    })}
                                                </div>
                                            </div>

                                        </div>

                                        <div className='ProfilePageBody-UserInfoForm-Group'>
                                            <div className='ProfilePageBody-UserInfoForm-TiposUserList'>
                                                <div className='ProfilePageBody-UserInfoForm-TiposUserList-Title'>
                                                    <UilListUl />
                                                    Tipos de Usuario
                                                </div>
                                                <div className='ProfilePageBody-UserInfoForm-TiposUserList-Itens'>
                                                    {TiposUsuarios.map(TipoUser => {
                                                        return <div className={'ProfilePageBody-UserInfoForm-TiposUserList-Item'} onClick={e => HandleChangeInfo('Type', TipoUser.Id)}>
                                                            {CopyUserType.Id === TipoUser.Id ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                                                            {TipoUser.Value}
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className='ProfilePageBody-UserInfoForm-Button'>
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



const ConnectedProfilePage = connect((state) => {
    return {
        LoggedUser: state.LoggedUser
    }
})(ProfilePage)

export default ConnectedProfilePage