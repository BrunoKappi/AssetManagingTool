//Dependencias
import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//Icones


//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
//Images
import Logo from '../../Images/SerranoNomeBranco.png'
import LogoBrancoSerrano from '../../Images/SerranoLogoBranco.png'
//Tooltip
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import { logout } from '../../Config/firebase/auth';
import { GetNavbarSidebarItemClass, SetTab } from '../Sidebar/SidebarUtils';
import { NotificationSucesso } from '../../NotificationUtils';
import User from '../../Images/User.png'

import { UilChartPieAlt, UilListUl, UilUsersAlt, UilSetting, UilUserCircle,UilSignout,UilBars } from '@iconscout/react-unicons'


const NavBar = (props) => {

    const Sair = () => {
        SetTab('Login')
        logout()
        NotificationSucesso('Logoff', "Logoff feito com sucesso!")
    }


    return (
        <div className='NavBarContainer'>

            <Navbar className='NavBar' expand={'md'} id='navBarResponsive' >
                <Container fluid bg='dark'>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} >
                        <UilBars className='NavBarToggleIcon' />
                    </Navbar.Toggle>
                    <Navbar.Brand>
                        <div className='LogoAndCollpse'>
                            <Tooltip title="Inicio" position="bottom" >
                                <Link to="/App/Dash">
                                    <img alt="Logo" className="LogoNavBar" src={Logo} />
                                </Link>
                            </Tooltip>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Offcanvas id="sidebarOffCanvas" backdrop={true}>
                        <Offcanvas.Header closeButton closeVariant='white'>
                            <Offcanvas.Title>
                                <h1>
                                    <Link className='offCanvasBrand' to="/App">
                                        <img alt="Logo" className="LogoNavBar" src={Logo} />
                                    </Link>
                                </h1>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 navBody ">

                                <div className='navDiv'>
                                    <NavDropdown title={<span className='ProfileNavLinkTitle' >Bruno Kappi</span>}>

                                        <Link to="/App/Dash" className={GetNavbarSidebarItemClass('Dash', props.LoggedUser.CurrentSidebarTab) + ' dropDownLink'} onClick={e => SetTab('Dash')}>
                                            <UilChartPieAlt />
                                            <span>Dashboard</span>
                                        </Link>

                                        <Link to="/App/Ativos" className={GetNavbarSidebarItemClass('Ativos', props.LoggedUser.CurrentSidebarTab) + ' dropDownLink'} onClick={e => SetTab('Ativos')}>
                                            <UilListUl />
                                            <span>Ativos</span>
                                        </Link>
                                        <Link to="/App/Users" className={GetNavbarSidebarItemClass('Users', props.LoggedUser.CurrentSidebarTab) + ' dropDownLink'} onClick={e => SetTab('Users')}>
                                            <UilUsersAlt />
                                            <span>Usuarios</span>
                                        </Link>
                                        <Link to="/App/Profile" className={GetNavbarSidebarItemClass('Profile', props.LoggedUser.CurrentSidebarTab) + ' dropDownLink'} onClick={e => SetTab('Profile')}>
                                            <UilUserCircle />
                                            <span>Meu Perfil</span>
                                        </Link>
                                        <Link to="/App/Config" className={GetNavbarSidebarItemClass('Config', props.LoggedUser.CurrentSidebarTab) + ' dropDownLink'} onClick={e => SetTab('Config')}>
                                            <UilSetting />
                                            <span>Configurações</span>
                                        </Link>

                                        <NavDropdown.Divider />
                                        <span href='/'  className="dropDownLink NavBarListSidebarItem" onClick={Sair}>
                                            <UilSignout /> Sair
                                        </span>
                                    </NavDropdown>
                                </div>

                                <div className='LastNavLogoIconContainer'>
                                    <img alt="Logo" src={LogoBrancoSerrano} className='LastNavLogoIcon'></img>
                                </div>


                                <div className='NavSidebarUserPhotoContainer'>
                                    <img alt='User' className='NavSidebarUserPhoto' src={User}></img>
                                </div>

                                <div className='NavbarSidebarUserName'>
                                    <p>Bruno</p>
                                    <p>Kappi</p>
                                </div>

                                <ul className='NavBarListSidebar'>
                                    <Link to="/App/Dash" className={GetNavbarSidebarItemClass('Dash', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Dash')}>
                                        <UilChartPieAlt />
                                        <span>Dashboard</span>
                                    </Link>
                                    <Link to="/App/Ativos" className={GetNavbarSidebarItemClass('Ativos', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Ativos')}>
                                        <UilListUl />
                                        <span>Ativos</span>
                                    </Link>
                                    <Link to="/App/Users" className={GetNavbarSidebarItemClass('Users', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Users')}>
                                        <UilUsersAlt />
                                        <span>Usuarios</span>
                                    </Link>
                                    <Link to="/App/Profile" className={GetNavbarSidebarItemClass('Profile', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Profile')}>
                                        <UilUserCircle />
                                        <span>Meu Perfil</span>
                                    </Link>
                                    <Link to="/App/Config" className={GetNavbarSidebarItemClass('Config', props.LoggedUser.CurrentSidebarTab)} onClick={e => SetTab('Config')}>
                                        <UilSetting />
                                        <span>Configurações</span>
                                    </Link>

                                    <Link to="/" className={GetNavbarSidebarItemClass('Sair', props.LoggedUser.CurrentSidebarTab)} onClick={Sair}>
                                        <UilSignout />
                                        <span>Sair</span>
                                    </Link>

                                </ul>


                            </Nav>





                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>



        </div >
    )
}


const ConnectedNavBar = connect((state) => {
    return {
        LoggedUser: state.LoggedUser
    }
})(NavBar)

export default ConnectedNavBar

