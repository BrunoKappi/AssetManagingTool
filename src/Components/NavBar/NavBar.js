//Dependencias
import React, { useState } from 'react'
import './NavBar.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//Icones
import { RiInboxArchiveFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
//Images
import Logo from '../../Images/AssetSenseIconWhite.png'
//Tooltip
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import { logout } from '../../Config/firebase/auth';

const NavBar = (props) => {


    const [Search, setSearch] = useState('');

    const handleSearchChange = (search) => {
        setSearch(search)
    }

    return (
        <div>

            <Navbar className='NavBar' expand={'md'} id='navBarResponsive' >
                <Container fluid bg='dark'>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} >
                        <GiHamburgerMenu className='NavBarToggleIcon' />
                    </Navbar.Toggle>
                    <Navbar.Brand>

                        <div className='LogoAndCollpse'>

                            <Tooltip title="Inicio" position="bottom" >
                                <Link to="/App">
                                    <img className="LogoNavBar" src={Logo} alt="" />
                                </Link>
                            </Tooltip>

                        </div>


                    </Navbar.Brand>

                    <Navbar.Offcanvas id="sidebarOffCanvas" backdrop={true}>
                        <Offcanvas.Header closeButton closeVariant='white'>
                            <Offcanvas.Title>
                                <h1>
                                    <Link className='offCanvasBrand' to="/App">
                                        <img className="LogoNavBar" src={Logo} alt="" />
                                    </Link>
                                </h1>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-1 navBody ">


                                <div className='navDiv'>
                                    <NavDropdown title={
                                        <span className='ProfileNavLinkTitle' >Nome Sobrenome</span>}>
                                        <Link className="dropDownLink" to="/App/Profile">
                                            <BsFillPersonFill className='IconeEscuro' />  Meu Perfil
                                        </Link>

                                        <Link className="dropDownLink" to="/App/Arquivadas">
                                            <RiInboxArchiveFill className='IconeEscuro' />  Arquivo
                                        </Link>

                                        <Link className="dropDownLink" to="/App/Deletadas">
                                            <MdDelete className='IconeEscuro' />  Lixeira
                                        </Link>

                                        <NavDropdown.Divider />
                                        <span href='/' className="dropDownLink" onClick={logout}>
                                            <MdOutlineLogout className='IconeEscuro' /> Sair
                                        </span>
                                    </NavDropdown>
                                </div>



                                <div id="SmDivNavBarID" className='SmDivNavBar'>

                                    <div className="SmSidebar">
                                        <ul className='SmUl'>

                                            <li>
                                                <Link className='smNavLink ' to="/App/Profile" >
                                                    <FaUserAlt />
                                                    <span className="TextoLink">Meu Pefil</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className='smNavLink ' to="/App/Arquivadas" >
                                                    <RiInboxArchiveFill />
                                                    <span className="TextoLink">Arquivo</span>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className='smNavLink ' to="/App/Deletadas" >
                                                    <MdDelete />
                                                    <span className="TextoLink">Lixeira</span>
                                                </Link>
                                            </li>

                                            <li className='LogouButtonNavSm'>
                                                <a href='/' id='LogouButtonNavSm' className="LogouButtonNavSm" onClick={logout}>
                                                    <MdOutlineLogout /> Sair
                                                </a>
                                            </li>



                                        </ul>
                                    </div>
                                </div>
                            </Nav>





                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>



        </div >
    )
}


export default NavBar

