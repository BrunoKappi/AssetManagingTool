import React from 'react'
import './Sidebar.css'
import { HiUsers } from 'react-icons/hi';
import { FaList, FaUserCog } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GetSidebarItemClass, SetTab } from './SidebarUtils';
import { connect } from 'react-redux'

const Sidebar = (props) => {
    return (
        <div className='SidebarContainer' >

            <div className='SidebarUserName'>
                <p>Bruno</p>
                <p>Kappi</p>
            </div>

            <ul className='SidebarList'>
                <Link to="/App/Dash" className={GetSidebarItemClass('Dash', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Dash')}>
                    <MdDashboard />
                    <span>Dashboard</span>
                </Link>
                <Link to="/App/Ativos" className={GetSidebarItemClass('Ativos', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Ativos')}>
                    <FaList />
                    <span>Ativos</span>
                </Link>
                <Link to="/App/Users" className={GetSidebarItemClass('Users', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Users')}>
                    <HiUsers />
                    <span>Usuarios</span>
                </Link>
                <Link to="/App/Profile" className={GetSidebarItemClass('Profile', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Profile')}>
                    <FaUserCog />
                    <span>Meu Perfil</span>
                </Link>
                <Link to="/App/Config" className={GetSidebarItemClass('Config', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Config')}>
                    <IoMdSettings />
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