import React from 'react'
import './Sidebar.css'

import { Link } from 'react-router-dom';
import { GetSidebarItemClass, SetTab } from './SidebarUtils';
import { connect } from 'react-redux'
import User from '../../Images/SerranoLogoFuncoBranco.jpg'

import { UilChartPieAlt, UilListUl, UilUsersAlt, UilSetting, UilUserCircle } from '@iconscout/react-unicons'

const Sidebar = (props) => {

    return (
        <div className='SidebarContainer' >

            <div className='SidebarUserPhotoContainer'>
                <img alt='User' className='SidebarUserPhoto' src={User}></img>
            </div>

            <div className='SidebarUserName'>
                <p>Bruno</p>
                <p>Kappi</p>
            </div>

            <ul className='SidebarList'>
                <Link to="/App/Dash" className={GetSidebarItemClass('Dash', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Dash')}>
                    <UilChartPieAlt />
                    <span>Dashboard</span>
                </Link>
                <Link to="/App/Ativos" className={ GetSidebarItemClass('Ativos', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Ativos')}>
                    <UilListUl />
                    <span>Ativos</span>
                </Link>
                <Link to="/App/Users" className={GetSidebarItemClass('Users', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Users')}>
                    <UilUsersAlt />
                    <span>Usuarios</span>
                </Link>
                <Link to="/App/Profile" className={GetSidebarItemClass('Profile', props.LoggedUser.CurrentSidebarTab)} >
                    <UilUserCircle />
                    <span>Meu Perfil</span>
                </Link>
                <Link to="/App/Config" className={GetSidebarItemClass('Config', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Config')}>
                    <UilSetting />
                    <span>Configurações</span>
                </Link>


            </ul>

        </div>
    )
}


const ConnectedSidebar = connect((state) => {
    return {
        LoggedUser: state.LoggedUser
    }
})(Sidebar)

export default ConnectedSidebar