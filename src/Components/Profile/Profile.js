import React, { useState } from 'react'
import './Profile.css'
import { connect } from 'react-redux'
import ProfilePage from './ProfilePage/ProfilePage'
import { useNavigate } from 'react-router-dom';



const Profile = (props) => {

    const navigate = useNavigate();
    const [CurrentUser,] = useState({ ...props.Usuarios.find(user => user.Email === props.LoggedUser.Email) })
    const [modalShow, setModalShow] = useState(true);



    return (
        <div className='ProfileContainer'>

            <ProfilePage CurrentUser={CurrentUser} User={CurrentUser} show={modalShow} onHide={() => {  setModalShow(false); navigate('../' + props.LoggedUser.CurrentSidebarTab);}} />

        </div>
    )
}


const ConnectedProfile = connect((state) => {
    return {
        LoggedUser: state.LoggedUser,
        Usuarios: state.Usuarios

    }
})(Profile)

export default ConnectedProfile