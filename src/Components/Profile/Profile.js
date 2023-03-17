import React, { useState } from 'react'
import './Profile.css'
import { connect } from 'react-redux'
import { Users } from '../../Data/User'

const Profile = (props) => {

  const [User, ] = useState({ ...Users.find(user => user.Email === props.LoggedUser.Email) })

  return (
    <div className='ProfileContainer'>

      <p>{User.Email}</p>
      <p>{User.Role}</p>
      <p>{User.Name}</p>

    </div>
  )
}


const ConnectedProfile = connect((state) => {
  return {
    LoggedUser: state.LoggedUser
  }
})(Profile)

export default ConnectedProfile