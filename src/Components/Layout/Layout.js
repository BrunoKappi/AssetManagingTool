import React from 'react'
import { Outlet } from "react-router-dom"
import './Layout.css'
import { connect } from 'react-redux'
import Navbar from '../NavBar/NavBar'



const Layout = (props) => {

    if (props.LoggedUser.Email) {
        return (
            <div className='LayoutContainer'>              
                <Navbar/> 
                <Outlet />
            </div >

        )
    } else {
        return (
            <div className='LayoutContainer'>
                Redirecionando
            </div>
        )
    }


}


const ConnectedLayout = connect((state) => {
    return {
        LoggedUser: state.LoggedUser
    }
})(Layout)

export default ConnectedLayout